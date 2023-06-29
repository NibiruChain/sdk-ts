/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"
import { Direction, directionFromJSON, directionToJSON, Position } from "./state"

export const protobufPackage = "nibiru.perp.v2"

/** MsgRemoveMargin: Msg to remove margin. */
export interface MsgRemoveMargin {
  $type: "nibiru.perp.v2.MsgRemoveMargin"
  sender: string
  pair: string
  margin?: Coin
}

export interface MsgRemoveMarginResponse {
  $type: "nibiru.perp.v2.MsgRemoveMarginResponse"
  /** tokens transferred back to the trader */
  marginOut?: Coin
  /** the funding payment applied on this position interaction */
  fundingPayment: string
  /** The resulting position */
  position?: Position
}

/** MsgAddMargin: Msg to remove margin. */
export interface MsgAddMargin {
  $type: "nibiru.perp.v2.MsgAddMargin"
  sender: string
  pair: string
  margin?: Coin
}

export interface MsgAddMarginResponse {
  $type: "nibiru.perp.v2.MsgAddMarginResponse"
  fundingPayment: string
  position?: Position
}

export interface MsgMultiLiquidate {
  $type: "nibiru.perp.v2.MsgMultiLiquidate"
  sender: string
  liquidations: MsgMultiLiquidate_Liquidation[]
}

export interface MsgMultiLiquidate_Liquidation {
  $type: "nibiru.perp.v2.MsgMultiLiquidate.Liquidation"
  pair: string
  trader: string
}

export interface MsgMultiLiquidateResponse {
  $type: "nibiru.perp.v2.MsgMultiLiquidateResponse"
  liquidations: MsgMultiLiquidateResponse_LiquidationResponse[]
}

export interface MsgMultiLiquidateResponse_LiquidationResponse {
  $type: "nibiru.perp.v2.MsgMultiLiquidateResponse.LiquidationResponse"
  success: boolean
  error: string
  /** nullable since no fee is taken on failed liquidation */
  liquidatorFee?: Coin
  /** perp ecosystem fund */
  perpEfFee?: Coin
  trader: string
}

export interface MsgOpenPosition {
  $type: "nibiru.perp.v2.MsgOpenPosition"
  sender: string
  pair: string
  side: Direction
  quoteAssetAmount: string
  leverage: string
  baseAssetAmountLimit: string
}

export interface MsgOpenPositionResponse {
  $type: "nibiru.perp.v2.MsgOpenPositionResponse"
  position?: Position
  /** The amount of quote assets exchanged. */
  exchangedNotionalValue: string
  /** The amount of base assets exchanged. */
  exchangedPositionSize: string
  /**
   * The funding payment applied on this position change, measured in quote
   * units.
   */
  fundingPayment: string
  /**
   * The amount of PnL realized on this position changed, measured in quote
   * units.
   */
  realizedPnl: string
  /**
   * The unrealized PnL in the position after the position change, measured in
   * quote units.
   */
  unrealizedPnlAfter: string
  /**
   * The amount of margin the trader has to give to the vault.
   * A negative value means the vault pays the trader.
   */
  marginToVault: string
  /**
   * The position's notional value after the position change, measured in quote
   * units.
   */
  positionNotional: string
}

export interface MsgClosePosition {
  $type: "nibiru.perp.v2.MsgClosePosition"
  sender: string
  pair: string
}

export interface MsgClosePositionResponse {
  $type: "nibiru.perp.v2.MsgClosePositionResponse"
  /** The amount of quote assets exchanged. */
  exchangedNotionalValue: string
  /** The amount of base assets exchanged. */
  exchangedPositionSize: string
  /**
   * The funding payment applied on this position change, measured in quote
   * units.
   */
  fundingPayment: string
  /**
   * The amount of PnL realized on this position changed, measured in quote
   * units.
   */
  realizedPnl: string
  /**
   * The amount of margin the trader receives after closing the position, from
   * the vault. Should never be negative.
   */
  marginToTrader: string
}

export interface MsgDonateToEcosystemFund {
  $type: "nibiru.perp.v2.MsgDonateToEcosystemFund"
  sender: string
  /** donation to the EF */
  donation?: Coin
}

export interface MsgDonateToEcosystemFundResponse {
  $type: "nibiru.perp.v2.MsgDonateToEcosystemFundResponse"
}

function createBaseMsgRemoveMargin(): MsgRemoveMargin {
  return {
    $type: "nibiru.perp.v2.MsgRemoveMargin",
    sender: "",
    pair: "",
    margin: undefined,
  }
}

export const MsgRemoveMargin = {
  $type: "nibiru.perp.v2.MsgRemoveMargin" as const,

  encode(
    message: MsgRemoveMargin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender)
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair)
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgRemoveMargin()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sender = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.pair = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.margin = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgRemoveMargin {
    return {
      $type: MsgRemoveMargin.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
    }
  },

  toJSON(message: MsgRemoveMargin): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.pair !== undefined && (obj.pair = message.pair)
    message.margin !== undefined &&
      (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgRemoveMargin>, I>>(base?: I): MsgRemoveMargin {
    return MsgRemoveMargin.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMargin>, I>>(
    object: I,
  ): MsgRemoveMargin {
    const message = createBaseMsgRemoveMargin()
    message.sender = object.sender ?? ""
    message.pair = object.pair ?? ""
    message.margin =
      object.margin !== undefined && object.margin !== null
        ? Coin.fromPartial(object.margin)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgRemoveMargin.$type, MsgRemoveMargin)

function createBaseMsgRemoveMarginResponse(): MsgRemoveMarginResponse {
  return {
    $type: "nibiru.perp.v2.MsgRemoveMarginResponse",
    marginOut: undefined,
    fundingPayment: "",
    position: undefined,
  }
}

export const MsgRemoveMarginResponse = {
  $type: "nibiru.perp.v2.MsgRemoveMarginResponse" as const,

  encode(
    message: MsgRemoveMarginResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.marginOut !== undefined) {
      Coin.encode(message.marginOut, writer.uint32(10).fork()).ldelim()
    }
    if (message.fundingPayment !== "") {
      writer.uint32(18).string(message.fundingPayment)
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgRemoveMarginResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.marginOut = Coin.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.fundingPayment = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.position = Position.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgRemoveMarginResponse {
    return {
      $type: MsgRemoveMarginResponse.$type,
      marginOut: isSet(object.marginOut) ? Coin.fromJSON(object.marginOut) : undefined,
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
    }
  },

  toJSON(message: MsgRemoveMarginResponse): unknown {
    const obj: any = {}
    message.marginOut !== undefined &&
      (obj.marginOut = message.marginOut ? Coin.toJSON(message.marginOut) : undefined)
    message.fundingPayment !== undefined &&
      (obj.fundingPayment = message.fundingPayment)
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgRemoveMarginResponse>, I>>(
    base?: I,
  ): MsgRemoveMarginResponse {
    return MsgRemoveMarginResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMarginResponse>, I>>(
    object: I,
  ): MsgRemoveMarginResponse {
    const message = createBaseMsgRemoveMarginResponse()
    message.marginOut =
      object.marginOut !== undefined && object.marginOut !== null
        ? Coin.fromPartial(object.marginOut)
        : undefined
    message.fundingPayment = object.fundingPayment ?? ""
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgRemoveMarginResponse.$type, MsgRemoveMarginResponse)

function createBaseMsgAddMargin(): MsgAddMargin {
  return {
    $type: "nibiru.perp.v2.MsgAddMargin",
    sender: "",
    pair: "",
    margin: undefined,
  }
}

export const MsgAddMargin = {
  $type: "nibiru.perp.v2.MsgAddMargin" as const,

  encode(message: MsgAddMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender)
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair)
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgAddMargin()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sender = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.pair = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.margin = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgAddMargin {
    return {
      $type: MsgAddMargin.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
    }
  },

  toJSON(message: MsgAddMargin): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.pair !== undefined && (obj.pair = message.pair)
    message.margin !== undefined &&
      (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgAddMargin>, I>>(base?: I): MsgAddMargin {
    return MsgAddMargin.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMargin>, I>>(object: I): MsgAddMargin {
    const message = createBaseMsgAddMargin()
    message.sender = object.sender ?? ""
    message.pair = object.pair ?? ""
    message.margin =
      object.margin !== undefined && object.margin !== null
        ? Coin.fromPartial(object.margin)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgAddMargin.$type, MsgAddMargin)

function createBaseMsgAddMarginResponse(): MsgAddMarginResponse {
  return {
    $type: "nibiru.perp.v2.MsgAddMarginResponse",
    fundingPayment: "",
    position: undefined,
  }
}

export const MsgAddMarginResponse = {
  $type: "nibiru.perp.v2.MsgAddMarginResponse" as const,

  encode(
    message: MsgAddMarginResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fundingPayment !== "") {
      writer.uint32(10).string(message.fundingPayment)
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgAddMarginResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.fundingPayment = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.position = Position.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgAddMarginResponse {
    return {
      $type: MsgAddMarginResponse.$type,
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
    }
  },

  toJSON(message: MsgAddMarginResponse): unknown {
    const obj: any = {}
    message.fundingPayment !== undefined &&
      (obj.fundingPayment = message.fundingPayment)
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgAddMarginResponse>, I>>(
    base?: I,
  ): MsgAddMarginResponse {
    return MsgAddMarginResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMarginResponse>, I>>(
    object: I,
  ): MsgAddMarginResponse {
    const message = createBaseMsgAddMarginResponse()
    message.fundingPayment = object.fundingPayment ?? ""
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgAddMarginResponse.$type, MsgAddMarginResponse)

function createBaseMsgMultiLiquidate(): MsgMultiLiquidate {
  return { $type: "nibiru.perp.v2.MsgMultiLiquidate", sender: "", liquidations: [] }
}

export const MsgMultiLiquidate = {
  $type: "nibiru.perp.v2.MsgMultiLiquidate" as const,

  encode(
    message: MsgMultiLiquidate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender)
    }
    for (const v of message.liquidations) {
      MsgMultiLiquidate_Liquidation.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiLiquidate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgMultiLiquidate()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sender = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.liquidations.push(
            MsgMultiLiquidate_Liquidation.decode(reader, reader.uint32()),
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgMultiLiquidate {
    return {
      $type: MsgMultiLiquidate.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      liquidations: Array.isArray(object?.liquidations)
        ? object.liquidations.map((e: any) => MsgMultiLiquidate_Liquidation.fromJSON(e))
        : [],
    }
  },

  toJSON(message: MsgMultiLiquidate): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    if (message.liquidations) {
      obj.liquidations = message.liquidations.map((e) =>
        e ? MsgMultiLiquidate_Liquidation.toJSON(e) : undefined,
      )
    } else {
      obj.liquidations = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<MsgMultiLiquidate>, I>>(
    base?: I,
  ): MsgMultiLiquidate {
    return MsgMultiLiquidate.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidate>, I>>(
    object: I,
  ): MsgMultiLiquidate {
    const message = createBaseMsgMultiLiquidate()
    message.sender = object.sender ?? ""
    message.liquidations =
      object.liquidations?.map((e) => MsgMultiLiquidate_Liquidation.fromPartial(e)) ||
      []
    return message
  },
}

messageTypeRegistry.set(MsgMultiLiquidate.$type, MsgMultiLiquidate)

function createBaseMsgMultiLiquidate_Liquidation(): MsgMultiLiquidate_Liquidation {
  return { $type: "nibiru.perp.v2.MsgMultiLiquidate.Liquidation", pair: "", trader: "" }
}

export const MsgMultiLiquidate_Liquidation = {
  $type: "nibiru.perp.v2.MsgMultiLiquidate.Liquidation" as const,

  encode(
    message: MsgMultiLiquidate_Liquidation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.trader !== "") {
      writer.uint32(18).string(message.trader)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgMultiLiquidate_Liquidation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgMultiLiquidate_Liquidation()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pair = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.trader = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgMultiLiquidate_Liquidation {
    return {
      $type: MsgMultiLiquidate_Liquidation.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
    }
  },

  toJSON(message: MsgMultiLiquidate_Liquidation): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.trader !== undefined && (obj.trader = message.trader)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgMultiLiquidate_Liquidation>, I>>(
    base?: I,
  ): MsgMultiLiquidate_Liquidation {
    return MsgMultiLiquidate_Liquidation.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidate_Liquidation>, I>>(
    object: I,
  ): MsgMultiLiquidate_Liquidation {
    const message = createBaseMsgMultiLiquidate_Liquidation()
    message.pair = object.pair ?? ""
    message.trader = object.trader ?? ""
    return message
  },
}

messageTypeRegistry.set(
  MsgMultiLiquidate_Liquidation.$type,
  MsgMultiLiquidate_Liquidation,
)

function createBaseMsgMultiLiquidateResponse(): MsgMultiLiquidateResponse {
  return { $type: "nibiru.perp.v2.MsgMultiLiquidateResponse", liquidations: [] }
}

export const MsgMultiLiquidateResponse = {
  $type: "nibiru.perp.v2.MsgMultiLiquidateResponse" as const,

  encode(
    message: MsgMultiLiquidateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.liquidations) {
      MsgMultiLiquidateResponse_LiquidationResponse.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiLiquidateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgMultiLiquidateResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.liquidations.push(
            MsgMultiLiquidateResponse_LiquidationResponse.decode(
              reader,
              reader.uint32(),
            ),
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgMultiLiquidateResponse {
    return {
      $type: MsgMultiLiquidateResponse.$type,
      liquidations: Array.isArray(object?.liquidations)
        ? object.liquidations.map((e: any) =>
            MsgMultiLiquidateResponse_LiquidationResponse.fromJSON(e),
          )
        : [],
    }
  },

  toJSON(message: MsgMultiLiquidateResponse): unknown {
    const obj: any = {}
    if (message.liquidations) {
      obj.liquidations = message.liquidations.map((e) =>
        e ? MsgMultiLiquidateResponse_LiquidationResponse.toJSON(e) : undefined,
      )
    } else {
      obj.liquidations = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<MsgMultiLiquidateResponse>, I>>(
    base?: I,
  ): MsgMultiLiquidateResponse {
    return MsgMultiLiquidateResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidateResponse>, I>>(
    object: I,
  ): MsgMultiLiquidateResponse {
    const message = createBaseMsgMultiLiquidateResponse()
    message.liquidations =
      object.liquidations?.map((e) =>
        MsgMultiLiquidateResponse_LiquidationResponse.fromPartial(e),
      ) || []
    return message
  },
}

messageTypeRegistry.set(MsgMultiLiquidateResponse.$type, MsgMultiLiquidateResponse)

function createBaseMsgMultiLiquidateResponse_LiquidationResponse(): MsgMultiLiquidateResponse_LiquidationResponse {
  return {
    $type: "nibiru.perp.v2.MsgMultiLiquidateResponse.LiquidationResponse",
    success: false,
    error: "",
    liquidatorFee: undefined,
    perpEfFee: undefined,
    trader: "",
  }
}

export const MsgMultiLiquidateResponse_LiquidationResponse = {
  $type: "nibiru.perp.v2.MsgMultiLiquidateResponse.LiquidationResponse" as const,

  encode(
    message: MsgMultiLiquidateResponse_LiquidationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success)
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error)
    }
    if (message.liquidatorFee !== undefined) {
      Coin.encode(message.liquidatorFee, writer.uint32(26).fork()).ldelim()
    }
    if (message.perpEfFee !== undefined) {
      Coin.encode(message.perpEfFee, writer.uint32(34).fork()).ldelim()
    }
    if (message.trader !== "") {
      writer.uint32(42).string(message.trader)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgMultiLiquidateResponse_LiquidationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgMultiLiquidateResponse_LiquidationResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.success = reader.bool()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.error = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.liquidatorFee = Coin.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.perpEfFee = Coin.decode(reader, reader.uint32())
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.trader = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgMultiLiquidateResponse_LiquidationResponse {
    return {
      $type: MsgMultiLiquidateResponse_LiquidationResponse.$type,
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : "",
      liquidatorFee: isSet(object.liquidatorFee)
        ? Coin.fromJSON(object.liquidatorFee)
        : undefined,
      perpEfFee: isSet(object.perpEfFee) ? Coin.fromJSON(object.perpEfFee) : undefined,
      trader: isSet(object.trader) ? String(object.trader) : "",
    }
  },

  toJSON(message: MsgMultiLiquidateResponse_LiquidationResponse): unknown {
    const obj: any = {}
    message.success !== undefined && (obj.success = message.success)
    message.error !== undefined && (obj.error = message.error)
    message.liquidatorFee !== undefined &&
      (obj.liquidatorFee = message.liquidatorFee
        ? Coin.toJSON(message.liquidatorFee)
        : undefined)
    message.perpEfFee !== undefined &&
      (obj.perpEfFee = message.perpEfFee ? Coin.toJSON(message.perpEfFee) : undefined)
    message.trader !== undefined && (obj.trader = message.trader)
    return obj
  },

  create<
    I extends Exact<DeepPartial<MsgMultiLiquidateResponse_LiquidationResponse>, I>,
  >(base?: I): MsgMultiLiquidateResponse_LiquidationResponse {
    return MsgMultiLiquidateResponse_LiquidationResponse.fromPartial(base ?? {})
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgMultiLiquidateResponse_LiquidationResponse>, I>,
  >(object: I): MsgMultiLiquidateResponse_LiquidationResponse {
    const message = createBaseMsgMultiLiquidateResponse_LiquidationResponse()
    message.success = object.success ?? false
    message.error = object.error ?? ""
    message.liquidatorFee =
      object.liquidatorFee !== undefined && object.liquidatorFee !== null
        ? Coin.fromPartial(object.liquidatorFee)
        : undefined
    message.perpEfFee =
      object.perpEfFee !== undefined && object.perpEfFee !== null
        ? Coin.fromPartial(object.perpEfFee)
        : undefined
    message.trader = object.trader ?? ""
    return message
  },
}

messageTypeRegistry.set(
  MsgMultiLiquidateResponse_LiquidationResponse.$type,
  MsgMultiLiquidateResponse_LiquidationResponse,
)

function createBaseMsgOpenPosition(): MsgOpenPosition {
  return {
    $type: "nibiru.perp.v2.MsgOpenPosition",
    sender: "",
    pair: "",
    side: 0,
    quoteAssetAmount: "",
    leverage: "",
    baseAssetAmountLimit: "",
  }
}

export const MsgOpenPosition = {
  $type: "nibiru.perp.v2.MsgOpenPosition" as const,

  encode(
    message: MsgOpenPosition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender)
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair)
    }
    if (message.side !== 0) {
      writer.uint32(24).int32(message.side)
    }
    if (message.quoteAssetAmount !== "") {
      writer.uint32(34).string(message.quoteAssetAmount)
    }
    if (message.leverage !== "") {
      writer.uint32(42).string(message.leverage)
    }
    if (message.baseAssetAmountLimit !== "") {
      writer.uint32(50).string(message.baseAssetAmountLimit)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgOpenPosition()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sender = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.pair = reader.string()
          continue
        case 3:
          if (tag !== 24) {
            break
          }

          message.side = reader.int32() as any
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.quoteAssetAmount = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.leverage = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.baseAssetAmountLimit = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgOpenPosition {
    return {
      $type: MsgOpenPosition.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      side: isSet(object.side) ? directionFromJSON(object.side) : 0,
      quoteAssetAmount: isSet(object.quoteAssetAmount)
        ? String(object.quoteAssetAmount)
        : "",
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
      baseAssetAmountLimit: isSet(object.baseAssetAmountLimit)
        ? String(object.baseAssetAmountLimit)
        : "",
    }
  },

  toJSON(message: MsgOpenPosition): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.pair !== undefined && (obj.pair = message.pair)
    message.side !== undefined && (obj.side = directionToJSON(message.side))
    message.quoteAssetAmount !== undefined &&
      (obj.quoteAssetAmount = message.quoteAssetAmount)
    message.leverage !== undefined && (obj.leverage = message.leverage)
    message.baseAssetAmountLimit !== undefined &&
      (obj.baseAssetAmountLimit = message.baseAssetAmountLimit)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgOpenPosition>, I>>(base?: I): MsgOpenPosition {
    return MsgOpenPosition.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenPosition>, I>>(
    object: I,
  ): MsgOpenPosition {
    const message = createBaseMsgOpenPosition()
    message.sender = object.sender ?? ""
    message.pair = object.pair ?? ""
    message.side = object.side ?? 0
    message.quoteAssetAmount = object.quoteAssetAmount ?? ""
    message.leverage = object.leverage ?? ""
    message.baseAssetAmountLimit = object.baseAssetAmountLimit ?? ""
    return message
  },
}

messageTypeRegistry.set(MsgOpenPosition.$type, MsgOpenPosition)

function createBaseMsgOpenPositionResponse(): MsgOpenPositionResponse {
  return {
    $type: "nibiru.perp.v2.MsgOpenPositionResponse",
    position: undefined,
    exchangedNotionalValue: "",
    exchangedPositionSize: "",
    fundingPayment: "",
    realizedPnl: "",
    unrealizedPnlAfter: "",
    marginToVault: "",
    positionNotional: "",
  }
}

export const MsgOpenPositionResponse = {
  $type: "nibiru.perp.v2.MsgOpenPositionResponse" as const,

  encode(
    message: MsgOpenPositionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim()
    }
    if (message.exchangedNotionalValue !== "") {
      writer.uint32(18).string(message.exchangedNotionalValue)
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(26).string(message.exchangedPositionSize)
    }
    if (message.fundingPayment !== "") {
      writer.uint32(34).string(message.fundingPayment)
    }
    if (message.realizedPnl !== "") {
      writer.uint32(42).string(message.realizedPnl)
    }
    if (message.unrealizedPnlAfter !== "") {
      writer.uint32(50).string(message.unrealizedPnlAfter)
    }
    if (message.marginToVault !== "") {
      writer.uint32(58).string(message.marginToVault)
    }
    if (message.positionNotional !== "") {
      writer.uint32(66).string(message.positionNotional)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgOpenPositionResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.position = Position.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.exchangedNotionalValue = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.exchangedPositionSize = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.fundingPayment = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.realizedPnl = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.unrealizedPnlAfter = reader.string()
          continue
        case 7:
          if (tag !== 58) {
            break
          }

          message.marginToVault = reader.string()
          continue
        case 8:
          if (tag !== 66) {
            break
          }

          message.positionNotional = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgOpenPositionResponse {
    return {
      $type: MsgOpenPositionResponse.$type,
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      exchangedNotionalValue: isSet(object.exchangedNotionalValue)
        ? String(object.exchangedNotionalValue)
        : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize)
        ? String(object.exchangedPositionSize)
        : "",
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      unrealizedPnlAfter: isSet(object.unrealizedPnlAfter)
        ? String(object.unrealizedPnlAfter)
        : "",
      marginToVault: isSet(object.marginToVault) ? String(object.marginToVault) : "",
      positionNotional: isSet(object.positionNotional)
        ? String(object.positionNotional)
        : "",
    }
  },

  toJSON(message: MsgOpenPositionResponse): unknown {
    const obj: any = {}
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined)
    message.exchangedNotionalValue !== undefined &&
      (obj.exchangedNotionalValue = message.exchangedNotionalValue)
    message.exchangedPositionSize !== undefined &&
      (obj.exchangedPositionSize = message.exchangedPositionSize)
    message.fundingPayment !== undefined &&
      (obj.fundingPayment = message.fundingPayment)
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl)
    message.unrealizedPnlAfter !== undefined &&
      (obj.unrealizedPnlAfter = message.unrealizedPnlAfter)
    message.marginToVault !== undefined && (obj.marginToVault = message.marginToVault)
    message.positionNotional !== undefined &&
      (obj.positionNotional = message.positionNotional)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgOpenPositionResponse>, I>>(
    base?: I,
  ): MsgOpenPositionResponse {
    return MsgOpenPositionResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenPositionResponse>, I>>(
    object: I,
  ): MsgOpenPositionResponse {
    const message = createBaseMsgOpenPositionResponse()
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined
    message.exchangedNotionalValue = object.exchangedNotionalValue ?? ""
    message.exchangedPositionSize = object.exchangedPositionSize ?? ""
    message.fundingPayment = object.fundingPayment ?? ""
    message.realizedPnl = object.realizedPnl ?? ""
    message.unrealizedPnlAfter = object.unrealizedPnlAfter ?? ""
    message.marginToVault = object.marginToVault ?? ""
    message.positionNotional = object.positionNotional ?? ""
    return message
  },
}

messageTypeRegistry.set(MsgOpenPositionResponse.$type, MsgOpenPositionResponse)

function createBaseMsgClosePosition(): MsgClosePosition {
  return { $type: "nibiru.perp.v2.MsgClosePosition", sender: "", pair: "" }
}

export const MsgClosePosition = {
  $type: "nibiru.perp.v2.MsgClosePosition" as const,

  encode(
    message: MsgClosePosition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender)
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClosePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgClosePosition()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sender = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.pair = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgClosePosition {
    return {
      $type: MsgClosePosition.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
    }
  },

  toJSON(message: MsgClosePosition): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.pair !== undefined && (obj.pair = message.pair)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgClosePosition>, I>>(
    base?: I,
  ): MsgClosePosition {
    return MsgClosePosition.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgClosePosition>, I>>(
    object: I,
  ): MsgClosePosition {
    const message = createBaseMsgClosePosition()
    message.sender = object.sender ?? ""
    message.pair = object.pair ?? ""
    return message
  },
}

messageTypeRegistry.set(MsgClosePosition.$type, MsgClosePosition)

function createBaseMsgClosePositionResponse(): MsgClosePositionResponse {
  return {
    $type: "nibiru.perp.v2.MsgClosePositionResponse",
    exchangedNotionalValue: "",
    exchangedPositionSize: "",
    fundingPayment: "",
    realizedPnl: "",
    marginToTrader: "",
  }
}

export const MsgClosePositionResponse = {
  $type: "nibiru.perp.v2.MsgClosePositionResponse" as const,

  encode(
    message: MsgClosePositionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.exchangedNotionalValue !== "") {
      writer.uint32(10).string(message.exchangedNotionalValue)
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(18).string(message.exchangedPositionSize)
    }
    if (message.fundingPayment !== "") {
      writer.uint32(26).string(message.fundingPayment)
    }
    if (message.realizedPnl !== "") {
      writer.uint32(34).string(message.realizedPnl)
    }
    if (message.marginToTrader !== "") {
      writer.uint32(58).string(message.marginToTrader)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClosePositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgClosePositionResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.exchangedNotionalValue = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.exchangedPositionSize = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.fundingPayment = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.realizedPnl = reader.string()
          continue
        case 7:
          if (tag !== 58) {
            break
          }

          message.marginToTrader = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgClosePositionResponse {
    return {
      $type: MsgClosePositionResponse.$type,
      exchangedNotionalValue: isSet(object.exchangedNotionalValue)
        ? String(object.exchangedNotionalValue)
        : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize)
        ? String(object.exchangedPositionSize)
        : "",
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      marginToTrader: isSet(object.marginToTrader) ? String(object.marginToTrader) : "",
    }
  },

  toJSON(message: MsgClosePositionResponse): unknown {
    const obj: any = {}
    message.exchangedNotionalValue !== undefined &&
      (obj.exchangedNotionalValue = message.exchangedNotionalValue)
    message.exchangedPositionSize !== undefined &&
      (obj.exchangedPositionSize = message.exchangedPositionSize)
    message.fundingPayment !== undefined &&
      (obj.fundingPayment = message.fundingPayment)
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl)
    message.marginToTrader !== undefined &&
      (obj.marginToTrader = message.marginToTrader)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgClosePositionResponse>, I>>(
    base?: I,
  ): MsgClosePositionResponse {
    return MsgClosePositionResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgClosePositionResponse>, I>>(
    object: I,
  ): MsgClosePositionResponse {
    const message = createBaseMsgClosePositionResponse()
    message.exchangedNotionalValue = object.exchangedNotionalValue ?? ""
    message.exchangedPositionSize = object.exchangedPositionSize ?? ""
    message.fundingPayment = object.fundingPayment ?? ""
    message.realizedPnl = object.realizedPnl ?? ""
    message.marginToTrader = object.marginToTrader ?? ""
    return message
  },
}

messageTypeRegistry.set(MsgClosePositionResponse.$type, MsgClosePositionResponse)

function createBaseMsgDonateToEcosystemFund(): MsgDonateToEcosystemFund {
  return {
    $type: "nibiru.perp.v2.MsgDonateToEcosystemFund",
    sender: "",
    donation: undefined,
  }
}

export const MsgDonateToEcosystemFund = {
  $type: "nibiru.perp.v2.MsgDonateToEcosystemFund" as const,

  encode(
    message: MsgDonateToEcosystemFund,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender)
    }
    if (message.donation !== undefined) {
      Coin.encode(message.donation, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateToEcosystemFund {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgDonateToEcosystemFund()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sender = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.donation = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgDonateToEcosystemFund {
    return {
      $type: MsgDonateToEcosystemFund.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      donation: isSet(object.donation) ? Coin.fromJSON(object.donation) : undefined,
    }
  },

  toJSON(message: MsgDonateToEcosystemFund): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.donation !== undefined &&
      (obj.donation = message.donation ? Coin.toJSON(message.donation) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgDonateToEcosystemFund>, I>>(
    base?: I,
  ): MsgDonateToEcosystemFund {
    return MsgDonateToEcosystemFund.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgDonateToEcosystemFund>, I>>(
    object: I,
  ): MsgDonateToEcosystemFund {
    const message = createBaseMsgDonateToEcosystemFund()
    message.sender = object.sender ?? ""
    message.donation =
      object.donation !== undefined && object.donation !== null
        ? Coin.fromPartial(object.donation)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgDonateToEcosystemFund.$type, MsgDonateToEcosystemFund)

function createBaseMsgDonateToEcosystemFundResponse(): MsgDonateToEcosystemFundResponse {
  return { $type: "nibiru.perp.v2.MsgDonateToEcosystemFundResponse" }
}

export const MsgDonateToEcosystemFundResponse = {
  $type: "nibiru.perp.v2.MsgDonateToEcosystemFundResponse" as const,

  encode(
    _: MsgDonateToEcosystemFundResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDonateToEcosystemFundResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgDonateToEcosystemFundResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): MsgDonateToEcosystemFundResponse {
    return { $type: MsgDonateToEcosystemFundResponse.$type }
  },

  toJSON(_: MsgDonateToEcosystemFundResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgDonateToEcosystemFundResponse>, I>>(
    base?: I,
  ): MsgDonateToEcosystemFundResponse {
    return MsgDonateToEcosystemFundResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgDonateToEcosystemFundResponse>, I>>(
    _: I,
  ): MsgDonateToEcosystemFundResponse {
    const message = createBaseMsgDonateToEcosystemFundResponse()
    return message
  },
}

messageTypeRegistry.set(
  MsgDonateToEcosystemFundResponse.$type,
  MsgDonateToEcosystemFundResponse,
)

/** Msg defines the x/perp Msg service. */
export interface Msg {
  RemoveMargin(request: MsgRemoveMargin): Promise<MsgRemoveMarginResponse>
  AddMargin(request: MsgAddMargin): Promise<MsgAddMarginResponse>
  MultiLiquidate(request: MsgMultiLiquidate): Promise<MsgMultiLiquidateResponse>
  OpenPosition(request: MsgOpenPosition): Promise<MsgOpenPositionResponse>
  ClosePosition(request: MsgClosePosition): Promise<MsgClosePositionResponse>
  DonateToEcosystemFund(
    request: MsgDonateToEcosystemFund,
  ): Promise<MsgDonateToEcosystemFundResponse>
}

export const MsgServiceName = "nibiru.perp.v2.Msg"
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName
    this.rpc = rpc
    this.RemoveMargin = this.RemoveMargin.bind(this)
    this.AddMargin = this.AddMargin.bind(this)
    this.MultiLiquidate = this.MultiLiquidate.bind(this)
    this.OpenPosition = this.OpenPosition.bind(this)
    this.ClosePosition = this.ClosePosition.bind(this)
    this.DonateToEcosystemFund = this.DonateToEcosystemFund.bind(this)
  }
  RemoveMargin(request: MsgRemoveMargin): Promise<MsgRemoveMarginResponse> {
    const data = MsgRemoveMargin.encode(request).finish()
    const promise = this.rpc.request(this.service, "RemoveMargin", data)
    return promise.then((data) =>
      MsgRemoveMarginResponse.decode(_m0.Reader.create(data)),
    )
  }

  AddMargin(request: MsgAddMargin): Promise<MsgAddMarginResponse> {
    const data = MsgAddMargin.encode(request).finish()
    const promise = this.rpc.request(this.service, "AddMargin", data)
    return promise.then((data) => MsgAddMarginResponse.decode(_m0.Reader.create(data)))
  }

  MultiLiquidate(request: MsgMultiLiquidate): Promise<MsgMultiLiquidateResponse> {
    const data = MsgMultiLiquidate.encode(request).finish()
    const promise = this.rpc.request(this.service, "MultiLiquidate", data)
    return promise.then((data) =>
      MsgMultiLiquidateResponse.decode(_m0.Reader.create(data)),
    )
  }

  OpenPosition(request: MsgOpenPosition): Promise<MsgOpenPositionResponse> {
    const data = MsgOpenPosition.encode(request).finish()
    const promise = this.rpc.request(this.service, "OpenPosition", data)
    return promise.then((data) =>
      MsgOpenPositionResponse.decode(_m0.Reader.create(data)),
    )
  }

  ClosePosition(request: MsgClosePosition): Promise<MsgClosePositionResponse> {
    const data = MsgClosePosition.encode(request).finish()
    const promise = this.rpc.request(this.service, "ClosePosition", data)
    return promise.then((data) =>
      MsgClosePositionResponse.decode(_m0.Reader.create(data)),
    )
  }

  DonateToEcosystemFund(
    request: MsgDonateToEcosystemFund,
  ): Promise<MsgDonateToEcosystemFundResponse> {
    const data = MsgDonateToEcosystemFund.encode(request).finish()
    const promise = this.rpc.request(this.service, "DonateToEcosystemFund", data)
    return promise.then((data) =>
      MsgDonateToEcosystemFundResponse.decode(_m0.Reader.create(data)),
    )
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
