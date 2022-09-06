import { DevnetNetwork } from "@nibiruchain/common"
import { initQuery } from "@nibiruchain/query"
import { Side } from "@nibiruchain/api/src/perp/v1/state"
import {
  AccountData,
  coin,
  coins,
  DirectSecp256k1HdWallet,
} from "@cosmjs/proto-signing"
import * as dotenv from "dotenv"
import { DexComposer, PerpComposer } from "."
import { generateWallet, msgSend, TxMessage } from "./common"
import { initTx, TxImpl } from "./tx"
import { DeliverTxResponse, assertIsDeliverTxSuccess } from "@cosmjs/stargate"
import { QueryTraderPositionResponse } from "@nibiruchain/api/src/perp/v1/query"
import { MsgTypeUrls } from "./perp"

dotenv.config() // yarn add -D dotenv

const VAL_MNEMONIC = process.env.VALIDATOR_MNEMONIC
const NETWORK = DevnetNetwork
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

function prettyTmLogs(tmLogs: string): string {
  return tmLogs.split('\\"').join("")
}

function expectTxToSucceed(txResp: DeliverTxResponse) {
  expect(txResp).not.toBeNull()
  assertIsDeliverTxSuccess(txResp)
}

function eventTypesForMsg(
  msgType: string,
  events: { type: string; attributes: any[] }[],
): string[] {
  const eventTypes: string[] = events.map((event) => event.type)
  eventTypes.map((eventType, eventIdx) => {
    if (eventType == "message") {
      expect(events[eventIdx].attributes).toContainEqual({
        key: "action",
        value: MsgTypeUrls[msgType],
      })
    }
  })
  return eventTypes
}

interface TxLog {
  events: { type: string; attributes: any[] }[]
}

describe("test tx module", () => {
  test("send tokens from the devnet genesis validator to a random account", async () => {
    expect(VAL_ADDRESS).toBeDefined()
    expect(VAL_MNEMONIC).toBeDefined()

    const txCmd: TxImpl = await initTx(NETWORK, VAL_MNEMONIC)
    const [{ address: fromAddr }]: readonly AccountData[] = await txCmd.getAccounts()
    expect(fromAddr).toBeDefined()

    const toWallet: DirectSecp256k1HdWallet = await generateWallet()
    const [{ address: toAddr }] = await toWallet.getAccounts()
    const tokens = coins(5, "unibi")
    const gasUsed = await txCmd.client.simulate(
      /*signerAddress*/ fromAddr,
      /*messages*/ [msgSend(fromAddr, toAddr, tokens)],
      /*memo*/ "example memo", // undefined,
    )
    expect(gasUsed).toBeGreaterThan(0)

    console.info(
      `Sending tokens...
      tokens: %O
      from: %s
      to: %s`,
      tokens,
      fromAddr,
      toAddr,
    )
    const gasLimit = gasUsed * 1.25

    const txResp = await txCmd.withFee(gasLimit).sendTokens(toAddr, tokens)
    expectTxToSucceed(txResp)
    console.info("txResp: %o", txResp)
  }, 10_000 /* This test takes roughly 5.3 seconds. The default timeout is not sufficient. */)
})

describe("perp module transactions", () => {
  test("open-position, add-margin, remove-margin, close-position", async () => {
    const txCmd = await initTx(DevnetNetwork, VAL_MNEMONIC)
    const [{ address: fromAddr }] = await txCmd.getAccounts()
    const pair = "ubtc:unusd"
    let msgs: TxMessage[] = [
      PerpComposer.openPosition({
        tokenPair: pair,
        baseAssetAmountLimit: "0",
        leverage: "1",
        quoteAssetAmount: "10",
        sender: fromAddr,
        side: Side.BUY,
      }),
      PerpComposer.addMargin({
        sender: fromAddr,
        tokenPair: pair,
        margin: coin("20", "unusd"),
      }),
      PerpComposer.removeMargin({
        tokenPair: pair,
        sender: fromAddr,
        margin: coin("5", "unusd"),
      }),
      // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
    ]
    let txResp: DeliverTxResponse = await txCmd.signAndBroadcast(...msgs)
    expectTxToSucceed(txResp)

    const txLogs: TxLog[] = JSON.parse(prettyTmLogs(txResp.rawLog!))
    console.debug(JSON.stringify(txLogs, null, 2))

    // perp tx open-position events
    let eventTypes: string[] = eventTypesForMsg("MsgOpenPosition", txLogs[0].events)
    expect(eventTypes).toContain("nibiru.vpool.v1.SwapQuoteForBaseEvent")
    expect(eventTypes).toContain("nibiru.vpool.v1.ReserveSnapshotSavedEvent")
    expect(eventTypes).toContain("nibiru.vpool.v1.MarkPriceChanged")
    expect(eventTypes).toContain("nibiru.perp.v1.PositionChangedEvent")
    expect(eventTypes).toContain("transfer")

    // perp tx add-margin events
    eventTypes = eventTypesForMsg("MsgAddMargin", txLogs[1].events)
    expect(eventTypes).not.toContain("nibiru.vpool.v1.MarkPriceChanged")
    expect(eventTypes).toContain("nibiru.perp.v1.PositionChangedEvent")
    expect(eventTypes).toContain("transfer")

    // perp tx remove-margin events
    eventTypes = eventTypesForMsg("MsgRemoveMargin", txLogs[2].events)
    expect(eventTypes).toContain("nibiru.perp.v1.PositionChangedEvent")
    expect(eventTypes).toContain("transfer")

    // Query and validate the trader's position
    const queryCmd = await initQuery(DevnetNetwork)
    let queryResp: QueryTraderPositionResponse =
      await queryCmd.client.perp.traderPosition({
        tokenPair: pair,
        trader: fromAddr,
      })
    const fields = [
      queryResp.blockNumber,
      queryResp.position,
      queryResp.marginRatioMark,
      queryResp.marginRatioIndex,
      queryResp.unrealizedPnl,
      queryResp.positionNotional,
    ]
    fields.forEach((val) => expect(val).toBeDefined())

    // close the position
    msgs = [PerpComposer.closePosition({ sender: fromAddr, tokenPair: pair })]
    txResp = await txCmd.signAndBroadcast(...msgs)
    expectTxToSucceed(txResp)
  }, 14_000 /* This test takes roughly 12 seconds, so the default timeout is not sufficient. */)
})

// ------------------------------------------------------------------------
// Commenting out tests for the dex module because it was temporarily removed.
// ------------------------------------------------------------------------

// - TODO test LPing into a pool, which is called JoinPool
// - TODO test swapping on an existing pool

/* 
  // NOTE commented out dex commands until public testnet
  test("dex create pool", async () => {
    const client = await initTx(DevnetNetwork, VAL_MNEMONIC)
    const [{ address: fromAddr }] = await client.getAccounts()
    const txResp = await client.signAndBroadcast(
      DexComposer.createPool({
        creator: fromAddr,
        poolAssets: [
          {
            token: { amount: "5", denom: "unibi" },
            weight: "1",
          },
          {
            token: { amount: "50", denom: "unusd" },
            weight: "1",
          },
        ],
        // Backend bug, throws nilpointer exception if omitted
        poolParams: {
          swapFee: "0",
          exitFee: "0",
        },
      }),
    )
    console.log("%o", txResp)
    expect(txResp).not.toBeNull()
    expect(txResp.code).toBe(0)
  })
 */
