import {
  QueryClient,
  setupBankExtension,
  setupAuthExtension,
  BankExtension,
  AuthExtension,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { Network } from "@nibiruchain/common"
import { setupDexExtension, DexExtension } from "./dex"
import { setupPerpExtension, PerpExtension } from "./perp"

type ExtendedClient = BankExtension &
  QueryClient &
  AuthExtension &
  DexExtension &
  PerpExtension
export interface Query {
  client: ExtendedClient
  disconnect: () => void
}

export class QueryImpl implements Query {
  client: ExtendedClient
  tmClient: Tendermint34Client

  constructor(tmClient: Tendermint34Client) {
    this.tmClient = tmClient
    this.client = QueryClient.withExtensions(
      tmClient,
      setupBankExtension,
      setupAuthExtension,
      setupDexExtension,
      setupPerpExtension,
    )
  }

  disconnect = () => {
    this.tmClient.disconnect()
  }
}

export async function initQuery(network: Network): Promise<QueryImpl> {
  const tmClient = await Tendermint34Client.connect(network.endptTm)
  return new QueryImpl(tmClient)
}
