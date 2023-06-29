/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { messageTypeRegistry } from "../../../typeRegistry"
import {
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
  ExchangeRateTuple,
  Params,
} from "./oracle"

export const protobufPackage = "nibiru.oracle.v1"

/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateRequest {
  $type: "nibiru.oracle.v1.QueryExchangeRateRequest"
  /** pair defines the pair to query for. */
  pair: string
}

/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  $type: "nibiru.oracle.v1.QueryExchangeRateResponse"
  /** exchange_rate defines the exchange rate of assets voted by validators */
  exchangeRate: string
}

/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC
 * method.
 */
export interface QueryExchangeRatesRequest {
  $type: "nibiru.oracle.v1.QueryExchangeRatesRequest"
}

/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  $type: "nibiru.oracle.v1.QueryExchangeRatesResponse"
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * pairs.
   */
  exchangeRates: ExchangeRateTuple[]
}

/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {
  $type: "nibiru.oracle.v1.QueryActivesRequest"
}

/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  $type: "nibiru.oracle.v1.QueryActivesResponse"
  /** actives defines a list of the pair which oracle prices agreed upon. */
  actives: string[]
}

/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC
 * method.
 */
export interface QueryVoteTargetsRequest {
  $type: "nibiru.oracle.v1.QueryVoteTargetsRequest"
}

/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  $type: "nibiru.oracle.v1.QueryVoteTargetsResponse"
  /**
   * vote_targets defines a list of the pairs in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[]
}

/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationRequest {
  $type: "nibiru.oracle.v1.QueryFeederDelegationRequest"
  /** validator defines the validator address to query for. */
  validatorAddr: string
}

/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  $type: "nibiru.oracle.v1.QueryFeederDelegationResponse"
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string
}

/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterRequest {
  $type: "nibiru.oracle.v1.QueryMissCounterRequest"
  /** validator defines the validator address to query for. */
  validatorAddr: string
}

/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  $type: "nibiru.oracle.v1.QueryMissCounterResponse"
  /** miss_counter defines the oracle miss counter of a validator */
  missCounter: Long
}

/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteRequest {
  $type: "nibiru.oracle.v1.QueryAggregatePrevoteRequest"
  /** validator defines the validator address to query for. */
  validatorAddr: string
}

/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  $type: "nibiru.oracle.v1.QueryAggregatePrevoteResponse"
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregatePrevote?: AggregateExchangeRatePrevote
}

/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequest {
  $type: "nibiru.oracle.v1.QueryAggregatePrevotesRequest"
}

/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  $type: "nibiru.oracle.v1.QueryAggregatePrevotesResponse"
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregatePrevotes: AggregateExchangeRatePrevote[]
}

/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteRequest {
  $type: "nibiru.oracle.v1.QueryAggregateVoteRequest"
  /** validator defines the validator address to query for. */
  validatorAddr: string
}

/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  $type: "nibiru.oracle.v1.QueryAggregateVoteResponse"
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregateVote?: AggregateExchangeRateVote
}

/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequest {
  $type: "nibiru.oracle.v1.QueryAggregateVotesRequest"
}

/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  $type: "nibiru.oracle.v1.QueryAggregateVotesResponse"
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregateVotes: AggregateExchangeRateVote[]
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: "nibiru.oracle.v1.QueryParamsRequest"
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: "nibiru.oracle.v1.QueryParamsResponse"
  /** params defines the parameters of the module. */
  params?: Params
}

function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return { $type: "nibiru.oracle.v1.QueryExchangeRateRequest", pair: "" }
}

export const QueryExchangeRateRequest = {
  $type: "nibiru.oracle.v1.QueryExchangeRateRequest" as const,

  encode(
    message: QueryExchangeRateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExchangeRateRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryExchangeRateRequest {
    return {
      $type: QueryExchangeRateRequest.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
    }
  },

  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(
    base?: I,
  ): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(
    object: I,
  ): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest()
    message.pair = object.pair ?? ""
    return message
  },
}

messageTypeRegistry.set(QueryExchangeRateRequest.$type, QueryExchangeRateRequest)

function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return { $type: "nibiru.oracle.v1.QueryExchangeRateResponse", exchangeRate: "" }
}

export const QueryExchangeRateResponse = {
  $type: "nibiru.oracle.v1.QueryExchangeRateResponse" as const,

  encode(
    message: QueryExchangeRateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExchangeRateResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.exchangeRate = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryExchangeRateResponse {
    return {
      $type: QueryExchangeRateResponse.$type,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
    }
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {}
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(
    base?: I,
  ): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(
    object: I,
  ): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse()
    message.exchangeRate = object.exchangeRate ?? ""
    return message
  },
}

messageTypeRegistry.set(QueryExchangeRateResponse.$type, QueryExchangeRateResponse)

function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return { $type: "nibiru.oracle.v1.QueryExchangeRatesRequest" }
}

export const QueryExchangeRatesRequest = {
  $type: "nibiru.oracle.v1.QueryExchangeRatesRequest" as const,

  encode(
    _: QueryExchangeRatesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExchangeRatesRequest()
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

  fromJSON(_: any): QueryExchangeRatesRequest {
    return { $type: QueryExchangeRatesRequest.$type }
  },

  toJSON(_: QueryExchangeRatesRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExchangeRatesRequest>, I>>(
    base?: I,
  ): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRatesRequest>, I>>(
    _: I,
  ): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest()
    return message
  },
}

messageTypeRegistry.set(QueryExchangeRatesRequest.$type, QueryExchangeRatesRequest)

function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return { $type: "nibiru.oracle.v1.QueryExchangeRatesResponse", exchangeRates: [] }
}

export const QueryExchangeRatesResponse = {
  $type: "nibiru.oracle.v1.QueryExchangeRatesResponse" as const,

  encode(
    message: QueryExchangeRatesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.exchangeRates) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExchangeRatesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryExchangeRatesResponse {
    return {
      $type: QueryExchangeRatesResponse.$type,
      exchangeRates: Array.isArray(object?.exchangeRates)
        ? object.exchangeRates.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryExchangeRatesResponse): unknown {
    const obj: any = {}
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined,
      )
    } else {
      obj.exchangeRates = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExchangeRatesResponse>, I>>(
    base?: I,
  ): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRatesResponse>, I>>(
    object: I,
  ): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse()
    message.exchangeRates =
      object.exchangeRates?.map((e) => ExchangeRateTuple.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(QueryExchangeRatesResponse.$type, QueryExchangeRatesResponse)

function createBaseQueryActivesRequest(): QueryActivesRequest {
  return { $type: "nibiru.oracle.v1.QueryActivesRequest" }
}

export const QueryActivesRequest = {
  $type: "nibiru.oracle.v1.QueryActivesRequest" as const,

  encode(_: QueryActivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryActivesRequest()
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

  fromJSON(_: any): QueryActivesRequest {
    return { $type: QueryActivesRequest.$type }
  },

  toJSON(_: QueryActivesRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryActivesRequest>, I>>(
    base?: I,
  ): QueryActivesRequest {
    return QueryActivesRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryActivesRequest>, I>>(
    _: I,
  ): QueryActivesRequest {
    const message = createBaseQueryActivesRequest()
    return message
  },
}

messageTypeRegistry.set(QueryActivesRequest.$type, QueryActivesRequest)

function createBaseQueryActivesResponse(): QueryActivesResponse {
  return { $type: "nibiru.oracle.v1.QueryActivesResponse", actives: [] }
}

export const QueryActivesResponse = {
  $type: "nibiru.oracle.v1.QueryActivesResponse" as const,

  encode(
    message: QueryActivesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.actives) {
      writer.uint32(10).string(v!)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryActivesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.actives.push(reader.string())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryActivesResponse {
    return {
      $type: QueryActivesResponse.$type,
      actives: Array.isArray(object?.actives)
        ? object.actives.map((e: any) => String(e))
        : [],
    }
  },

  toJSON(message: QueryActivesResponse): unknown {
    const obj: any = {}
    if (message.actives) {
      obj.actives = message.actives.map((e) => e)
    } else {
      obj.actives = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryActivesResponse>, I>>(
    base?: I,
  ): QueryActivesResponse {
    return QueryActivesResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryActivesResponse>, I>>(
    object: I,
  ): QueryActivesResponse {
    const message = createBaseQueryActivesResponse()
    message.actives = object.actives?.map((e) => e) || []
    return message
  },
}

messageTypeRegistry.set(QueryActivesResponse.$type, QueryActivesResponse)

function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return { $type: "nibiru.oracle.v1.QueryVoteTargetsRequest" }
}

export const QueryVoteTargetsRequest = {
  $type: "nibiru.oracle.v1.QueryVoteTargetsRequest" as const,

  encode(
    _: QueryVoteTargetsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryVoteTargetsRequest()
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

  fromJSON(_: any): QueryVoteTargetsRequest {
    return { $type: QueryVoteTargetsRequest.$type }
  },

  toJSON(_: QueryVoteTargetsRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryVoteTargetsRequest>, I>>(
    base?: I,
  ): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteTargetsRequest>, I>>(
    _: I,
  ): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest()
    return message
  },
}

messageTypeRegistry.set(QueryVoteTargetsRequest.$type, QueryVoteTargetsRequest)

function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return { $type: "nibiru.oracle.v1.QueryVoteTargetsResponse", voteTargets: [] }
}

export const QueryVoteTargetsResponse = {
  $type: "nibiru.oracle.v1.QueryVoteTargetsResponse" as const,

  encode(
    message: QueryVoteTargetsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryVoteTargetsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.voteTargets.push(reader.string())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryVoteTargetsResponse {
    return {
      $type: QueryVoteTargetsResponse.$type,
      voteTargets: Array.isArray(object?.voteTargets)
        ? object.voteTargets.map((e: any) => String(e))
        : [],
    }
  },

  toJSON(message: QueryVoteTargetsResponse): unknown {
    const obj: any = {}
    if (message.voteTargets) {
      obj.voteTargets = message.voteTargets.map((e) => e)
    } else {
      obj.voteTargets = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryVoteTargetsResponse>, I>>(
    base?: I,
  ): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteTargetsResponse>, I>>(
    object: I,
  ): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse()
    message.voteTargets = object.voteTargets?.map((e) => e) || []
    return message
  },
}

messageTypeRegistry.set(QueryVoteTargetsResponse.$type, QueryVoteTargetsResponse)

function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return { $type: "nibiru.oracle.v1.QueryFeederDelegationRequest", validatorAddr: "" }
}

export const QueryFeederDelegationRequest = {
  $type: "nibiru.oracle.v1.QueryFeederDelegationRequest" as const,

  encode(
    message: QueryFeederDelegationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryFeederDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryFeederDelegationRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.validatorAddr = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryFeederDelegationRequest {
    return {
      $type: QueryFeederDelegationRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    }
  },

  toJSON(message: QueryFeederDelegationRequest): unknown {
    const obj: any = {}
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryFeederDelegationRequest>, I>>(
    base?: I,
  ): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeederDelegationRequest>, I>>(
    object: I,
  ): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest()
    message.validatorAddr = object.validatorAddr ?? ""
    return message
  },
}

messageTypeRegistry.set(
  QueryFeederDelegationRequest.$type,
  QueryFeederDelegationRequest,
)

function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return { $type: "nibiru.oracle.v1.QueryFeederDelegationResponse", feederAddr: "" }
}

export const QueryFeederDelegationResponse = {
  $type: "nibiru.oracle.v1.QueryFeederDelegationResponse" as const,

  encode(
    message: QueryFeederDelegationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryFeederDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryFeederDelegationResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.feederAddr = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryFeederDelegationResponse {
    return {
      $type: QueryFeederDelegationResponse.$type,
      feederAddr: isSet(object.feederAddr) ? String(object.feederAddr) : "",
    }
  },

  toJSON(message: QueryFeederDelegationResponse): unknown {
    const obj: any = {}
    message.feederAddr !== undefined && (obj.feederAddr = message.feederAddr)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryFeederDelegationResponse>, I>>(
    base?: I,
  ): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeederDelegationResponse>, I>>(
    object: I,
  ): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse()
    message.feederAddr = object.feederAddr ?? ""
    return message
  },
}

messageTypeRegistry.set(
  QueryFeederDelegationResponse.$type,
  QueryFeederDelegationResponse,
)

function createBaseQueryMissCounterRequest(): QueryMissCounterRequest {
  return { $type: "nibiru.oracle.v1.QueryMissCounterRequest", validatorAddr: "" }
}

export const QueryMissCounterRequest = {
  $type: "nibiru.oracle.v1.QueryMissCounterRequest" as const,

  encode(
    message: QueryMissCounterRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryMissCounterRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.validatorAddr = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryMissCounterRequest {
    return {
      $type: QueryMissCounterRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    }
  },

  toJSON(message: QueryMissCounterRequest): unknown {
    const obj: any = {}
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryMissCounterRequest>, I>>(
    base?: I,
  ): QueryMissCounterRequest {
    return QueryMissCounterRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryMissCounterRequest>, I>>(
    object: I,
  ): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest()
    message.validatorAddr = object.validatorAddr ?? ""
    return message
  },
}

messageTypeRegistry.set(QueryMissCounterRequest.$type, QueryMissCounterRequest)

function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return { $type: "nibiru.oracle.v1.QueryMissCounterResponse", missCounter: Long.UZERO }
}

export const QueryMissCounterResponse = {
  $type: "nibiru.oracle.v1.QueryMissCounterResponse" as const,

  encode(
    message: QueryMissCounterResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.missCounter.isZero()) {
      writer.uint32(8).uint64(message.missCounter)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryMissCounterResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.missCounter = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryMissCounterResponse {
    return {
      $type: QueryMissCounterResponse.$type,
      missCounter: isSet(object.missCounter)
        ? Long.fromValue(object.missCounter)
        : Long.UZERO,
    }
  },

  toJSON(message: QueryMissCounterResponse): unknown {
    const obj: any = {}
    message.missCounter !== undefined &&
      (obj.missCounter = (message.missCounter || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryMissCounterResponse>, I>>(
    base?: I,
  ): QueryMissCounterResponse {
    return QueryMissCounterResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryMissCounterResponse>, I>>(
    object: I,
  ): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse()
    message.missCounter =
      object.missCounter !== undefined && object.missCounter !== null
        ? Long.fromValue(object.missCounter)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryMissCounterResponse.$type, QueryMissCounterResponse)

function createBaseQueryAggregatePrevoteRequest(): QueryAggregatePrevoteRequest {
  return { $type: "nibiru.oracle.v1.QueryAggregatePrevoteRequest", validatorAddr: "" }
}

export const QueryAggregatePrevoteRequest = {
  $type: "nibiru.oracle.v1.QueryAggregatePrevoteRequest" as const,

  encode(
    message: QueryAggregatePrevoteRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregatePrevoteRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.validatorAddr = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryAggregatePrevoteRequest {
    return {
      $type: QueryAggregatePrevoteRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    }
  },

  toJSON(message: QueryAggregatePrevoteRequest): unknown {
    const obj: any = {}
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevoteRequest>, I>>(
    base?: I,
  ): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevoteRequest>, I>>(
    object: I,
  ): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest()
    message.validatorAddr = object.validatorAddr ?? ""
    return message
  },
}

messageTypeRegistry.set(
  QueryAggregatePrevoteRequest.$type,
  QueryAggregatePrevoteRequest,
)

function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    $type: "nibiru.oracle.v1.QueryAggregatePrevoteResponse",
    aggregatePrevote: undefined,
  }
}

export const QueryAggregatePrevoteResponse = {
  $type: "nibiru.oracle.v1.QueryAggregatePrevoteResponse" as const,

  encode(
    message: QueryAggregatePrevoteResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(
        message.aggregatePrevote,
        writer.uint32(10).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregatePrevoteResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): QueryAggregatePrevoteResponse {
    return {
      $type: QueryAggregatePrevoteResponse.$type,
      aggregatePrevote: isSet(object.aggregatePrevote)
        ? AggregateExchangeRatePrevote.fromJSON(object.aggregatePrevote)
        : undefined,
    }
  },

  toJSON(message: QueryAggregatePrevoteResponse): unknown {
    const obj: any = {}
    message.aggregatePrevote !== undefined &&
      (obj.aggregatePrevote = message.aggregatePrevote
        ? AggregateExchangeRatePrevote.toJSON(message.aggregatePrevote)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevoteResponse>, I>>(
    base?: I,
  ): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevoteResponse>, I>>(
    object: I,
  ): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse()
    message.aggregatePrevote =
      object.aggregatePrevote !== undefined && object.aggregatePrevote !== null
        ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote)
        : undefined
    return message
  },
}

messageTypeRegistry.set(
  QueryAggregatePrevoteResponse.$type,
  QueryAggregatePrevoteResponse,
)

function createBaseQueryAggregatePrevotesRequest(): QueryAggregatePrevotesRequest {
  return { $type: "nibiru.oracle.v1.QueryAggregatePrevotesRequest" }
}

export const QueryAggregatePrevotesRequest = {
  $type: "nibiru.oracle.v1.QueryAggregatePrevotesRequest" as const,

  encode(
    _: QueryAggregatePrevotesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevotesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregatePrevotesRequest()
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

  fromJSON(_: any): QueryAggregatePrevotesRequest {
    return { $type: QueryAggregatePrevotesRequest.$type }
  },

  toJSON(_: QueryAggregatePrevotesRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevotesRequest>, I>>(
    base?: I,
  ): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevotesRequest>, I>>(
    _: I,
  ): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest()
    return message
  },
}

messageTypeRegistry.set(
  QueryAggregatePrevotesRequest.$type,
  QueryAggregatePrevotesRequest,
)

function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    $type: "nibiru.oracle.v1.QueryAggregatePrevotesResponse",
    aggregatePrevotes: [],
  }
}

export const QueryAggregatePrevotesResponse = {
  $type: "nibiru.oracle.v1.QueryAggregatePrevotesResponse" as const,

  encode(
    message: QueryAggregatePrevotesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevotesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregatePrevotesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.aggregatePrevotes.push(
            AggregateExchangeRatePrevote.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryAggregatePrevotesResponse {
    return {
      $type: QueryAggregatePrevotesResponse.$type,
      aggregatePrevotes: Array.isArray(object?.aggregatePrevotes)
        ? object.aggregatePrevotes.map((e: any) =>
            AggregateExchangeRatePrevote.fromJSON(e),
          )
        : [],
    }
  },

  toJSON(message: QueryAggregatePrevotesResponse): unknown {
    const obj: any = {}
    if (message.aggregatePrevotes) {
      obj.aggregatePrevotes = message.aggregatePrevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined,
      )
    } else {
      obj.aggregatePrevotes = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevotesResponse>, I>>(
    base?: I,
  ): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevotesResponse>, I>>(
    object: I,
  ): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse()
    message.aggregatePrevotes =
      object.aggregatePrevotes?.map((e) =>
        AggregateExchangeRatePrevote.fromPartial(e),
      ) || []
    return message
  },
}

messageTypeRegistry.set(
  QueryAggregatePrevotesResponse.$type,
  QueryAggregatePrevotesResponse,
)

function createBaseQueryAggregateVoteRequest(): QueryAggregateVoteRequest {
  return { $type: "nibiru.oracle.v1.QueryAggregateVoteRequest", validatorAddr: "" }
}

export const QueryAggregateVoteRequest = {
  $type: "nibiru.oracle.v1.QueryAggregateVoteRequest" as const,

  encode(
    message: QueryAggregateVoteRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregateVoteRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.validatorAddr = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryAggregateVoteRequest {
    return {
      $type: QueryAggregateVoteRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    }
  },

  toJSON(message: QueryAggregateVoteRequest): unknown {
    const obj: any = {}
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregateVoteRequest>, I>>(
    base?: I,
  ): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVoteRequest>, I>>(
    object: I,
  ): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest()
    message.validatorAddr = object.validatorAddr ?? ""
    return message
  },
}

messageTypeRegistry.set(QueryAggregateVoteRequest.$type, QueryAggregateVoteRequest)

function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    $type: "nibiru.oracle.v1.QueryAggregateVoteResponse",
    aggregateVote: undefined,
  }
}

export const QueryAggregateVoteResponse = {
  $type: "nibiru.oracle.v1.QueryAggregateVoteResponse" as const,

  encode(
    message: QueryAggregateVoteResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(
        message.aggregateVote,
        writer.uint32(10).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregateVoteResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.aggregateVote = AggregateExchangeRateVote.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): QueryAggregateVoteResponse {
    return {
      $type: QueryAggregateVoteResponse.$type,
      aggregateVote: isSet(object.aggregateVote)
        ? AggregateExchangeRateVote.fromJSON(object.aggregateVote)
        : undefined,
    }
  },

  toJSON(message: QueryAggregateVoteResponse): unknown {
    const obj: any = {}
    message.aggregateVote !== undefined &&
      (obj.aggregateVote = message.aggregateVote
        ? AggregateExchangeRateVote.toJSON(message.aggregateVote)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregateVoteResponse>, I>>(
    base?: I,
  ): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVoteResponse>, I>>(
    object: I,
  ): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse()
    message.aggregateVote =
      object.aggregateVote !== undefined && object.aggregateVote !== null
        ? AggregateExchangeRateVote.fromPartial(object.aggregateVote)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryAggregateVoteResponse.$type, QueryAggregateVoteResponse)

function createBaseQueryAggregateVotesRequest(): QueryAggregateVotesRequest {
  return { $type: "nibiru.oracle.v1.QueryAggregateVotesRequest" }
}

export const QueryAggregateVotesRequest = {
  $type: "nibiru.oracle.v1.QueryAggregateVotesRequest" as const,

  encode(
    _: QueryAggregateVotesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregateVotesRequest()
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

  fromJSON(_: any): QueryAggregateVotesRequest {
    return { $type: QueryAggregateVotesRequest.$type }
  },

  toJSON(_: QueryAggregateVotesRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregateVotesRequest>, I>>(
    base?: I,
  ): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVotesRequest>, I>>(
    _: I,
  ): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest()
    return message
  },
}

messageTypeRegistry.set(QueryAggregateVotesRequest.$type, QueryAggregateVotesRequest)

function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return { $type: "nibiru.oracle.v1.QueryAggregateVotesResponse", aggregateVotes: [] }
}

export const QueryAggregateVotesResponse = {
  $type: "nibiru.oracle.v1.QueryAggregateVotesResponse" as const,

  encode(
    message: QueryAggregateVotesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryAggregateVotesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.aggregateVotes.push(
            AggregateExchangeRateVote.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryAggregateVotesResponse {
    return {
      $type: QueryAggregateVotesResponse.$type,
      aggregateVotes: Array.isArray(object?.aggregateVotes)
        ? object.aggregateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryAggregateVotesResponse): unknown {
    const obj: any = {}
    if (message.aggregateVotes) {
      obj.aggregateVotes = message.aggregateVotes.map((e) =>
        e ? AggregateExchangeRateVote.toJSON(e) : undefined,
      )
    } else {
      obj.aggregateVotes = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryAggregateVotesResponse>, I>>(
    base?: I,
  ): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVotesResponse>, I>>(
    object: I,
  ): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse()
    message.aggregateVotes =
      object.aggregateVotes?.map((e) => AggregateExchangeRateVote.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(QueryAggregateVotesResponse.$type, QueryAggregateVotesResponse)

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: "nibiru.oracle.v1.QueryParamsRequest" }
}

export const QueryParamsRequest = {
  $type: "nibiru.oracle.v1.QueryParamsRequest" as const,

  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsRequest()
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

  fromJSON(_: any): QueryParamsRequest {
    return { $type: QueryParamsRequest.$type }
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    base?: I,
  ): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest()
    return message
  },
}

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest)

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { $type: "nibiru.oracle.v1.QueryParamsResponse", params: undefined }
}

export const QueryParamsResponse = {
  $type: "nibiru.oracle.v1.QueryParamsResponse" as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.params = Params.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      $type: QueryParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    }
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    base?: I,
  ): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse()
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse)

/** Query defines the gRPC querier service. */
export interface Query {
  /** ExchangeRate returns exchange rate of a pair */
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>
  /** ExchangeRateTwap returns twap exchange rate of a pair */
  ExchangeRateTwap(
    request: QueryExchangeRateRequest,
  ): Promise<QueryExchangeRateResponse>
  /** ExchangeRates returns exchange rates of all pairs */
  ExchangeRates(request: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>
  /** Actives returns all active pairs */
  Actives(request: QueryActivesRequest): Promise<QueryActivesResponse>
  /** VoteTargets returns all vote target for pairs */
  VoteTargets(request: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>
  /** FeederDelegation returns feeder delegation of a validator */
  FeederDelegation(
    request: QueryFeederDelegationRequest,
  ): Promise<QueryFeederDelegationResponse>
  /** MissCounter returns oracle miss counter of a validator */
  MissCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>
  /** AggregatePrevote returns an aggregate prevote of a validator */
  AggregatePrevote(
    request: QueryAggregatePrevoteRequest,
  ): Promise<QueryAggregatePrevoteResponse>
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  AggregatePrevotes(
    request: QueryAggregatePrevotesRequest,
  ): Promise<QueryAggregatePrevotesResponse>
  /** AggregateVote returns an aggregate vote of a validator */
  AggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>
  /** AggregateVotes returns aggregate votes of all validators */
  AggregateVotes(
    request: QueryAggregateVotesRequest,
  ): Promise<QueryAggregateVotesResponse>
  /** Params queries all parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
}

export const QueryServiceName = "nibiru.oracle.v1.Query"
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName
    this.rpc = rpc
    this.ExchangeRate = this.ExchangeRate.bind(this)
    this.ExchangeRateTwap = this.ExchangeRateTwap.bind(this)
    this.ExchangeRates = this.ExchangeRates.bind(this)
    this.Actives = this.Actives.bind(this)
    this.VoteTargets = this.VoteTargets.bind(this)
    this.FeederDelegation = this.FeederDelegation.bind(this)
    this.MissCounter = this.MissCounter.bind(this)
    this.AggregatePrevote = this.AggregatePrevote.bind(this)
    this.AggregatePrevotes = this.AggregatePrevotes.bind(this)
    this.AggregateVote = this.AggregateVote.bind(this)
    this.AggregateVotes = this.AggregateVotes.bind(this)
    this.Params = this.Params.bind(this)
  }
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "ExchangeRate", data)
    return promise.then((data) =>
      QueryExchangeRateResponse.decode(_m0.Reader.create(data)),
    )
  }

  ExchangeRateTwap(
    request: QueryExchangeRateRequest,
  ): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "ExchangeRateTwap", data)
    return promise.then((data) =>
      QueryExchangeRateResponse.decode(_m0.Reader.create(data)),
    )
  }

  ExchangeRates(
    request: QueryExchangeRatesRequest,
  ): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRatesRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "ExchangeRates", data)
    return promise.then((data) =>
      QueryExchangeRatesResponse.decode(_m0.Reader.create(data)),
    )
  }

  Actives(request: QueryActivesRequest): Promise<QueryActivesResponse> {
    const data = QueryActivesRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Actives", data)
    return promise.then((data) => QueryActivesResponse.decode(_m0.Reader.create(data)))
  }

  VoteTargets(request: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse> {
    const data = QueryVoteTargetsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "VoteTargets", data)
    return promise.then((data) =>
      QueryVoteTargetsResponse.decode(_m0.Reader.create(data)),
    )
  }

  FeederDelegation(
    request: QueryFeederDelegationRequest,
  ): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegationRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "FeederDelegation", data)
    return promise.then((data) =>
      QueryFeederDelegationResponse.decode(_m0.Reader.create(data)),
    )
  }

  MissCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounterRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "MissCounter", data)
    return promise.then((data) =>
      QueryMissCounterResponse.decode(_m0.Reader.create(data)),
    )
  }

  AggregatePrevote(
    request: QueryAggregatePrevoteRequest,
  ): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevoteRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "AggregatePrevote", data)
    return promise.then((data) =>
      QueryAggregatePrevoteResponse.decode(_m0.Reader.create(data)),
    )
  }

  AggregatePrevotes(
    request: QueryAggregatePrevotesRequest,
  ): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotesRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "AggregatePrevotes", data)
    return promise.then((data) =>
      QueryAggregatePrevotesResponse.decode(_m0.Reader.create(data)),
    )
  }

  AggregateVote(
    request: QueryAggregateVoteRequest,
  ): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVoteRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "AggregateVote", data)
    return promise.then((data) =>
      QueryAggregateVoteResponse.decode(_m0.Reader.create(data)),
    )
  }

  AggregateVotes(
    request: QueryAggregateVotesRequest,
  ): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotesRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "AggregateVotes", data)
    return promise.then((data) =>
      QueryAggregateVotesResponse.decode(_m0.Reader.create(data)),
    )
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Params", data)
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)))
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
