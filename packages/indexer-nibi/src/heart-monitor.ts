import WebSocket from "ws"
import { Client, ExecutionResult, createClient } from "graphql-ws"
import { gqlEndptFromTmRpc } from "./gql"
import {
  Delegation,
  DistributionCommission,
  Governance,
  MarkPriceCandle,
  OraclePrice,
  PerpMarket,
  PerpPosition,
  QueryCommunityPoolArgs,
  QueryDelegationsArgs,
  QueryDistributionCommissionsArgs,
  QueryMarkPriceCandlesArgs,
  QueryRedelegationsArgs,
  QuerySpotLpPositionsArgs,
  QuerySpotPoolCreatedArgs,
  QuerySpotPoolExitedArgs,
  QuerySpotPoolJoinedArgs,
  QuerySpotPoolSwapArgs,
  QuerySpotPoolsArgs,
  QueryUnbondingsArgs,
  QueryUsersArgs,
  QueryValidatorsArgs,
  Redelegation,
  SpotLpPosition,
  SpotPool,
  SpotPoolCreated,
  SpotPoolExited,
  SpotPoolJoined,
  SpotPoolSwap,
  SubscriptionMarkPriceCandlesArgs,
  SubscriptionOraclePricesArgs,
  SubscriptionPerpMarketArgs,
  SubscriptionPerpPositionsArgs,
  Token,
  Unbonding,
  User,
  Validator,
} from "./gql/generated"
import {
  GqlOutCommunityPool,
  GqlOutDelegations,
  GqlOutDistributionCommissions,
  GqlOutRedelegations,
  GqlOutSpotLpPositions,
  GqlOutSpotPoolCreated,
  GqlOutSpotPoolExited,
  GqlOutSpotPoolJoined,
  GqlOutSpotPoolSwap,
  GqlOutSpotPools,
  GqlOutUnbondings,
  GqlOutUsers,
  GqlOutValidators,
  communityPool,
  delegations,
  distributionCommissions,
  redelegations,
  spotLpPositions,
  spotPoolCreated,
  spotPoolExited,
  spotPoolJoined,
  spotPoolSwap,
  spotPools,
  unbondings,
  users,
  validators,
  GqlOutPerp,
  PerpFields,
  QueryPerpArgs,
  perp,
  GqlOutStats,
  QueryStatsArgs,
  StatsFields,
  stats,
  GqlOutGovernance,
  QueryGovernanceArgs,
  governance,
  GqlOutMarkPriceCandles,
  markPriceCandles,
  QueryOracleArgs,
  OracleFields,
  GqlOutOracle,
  oracle,
} from "./query"
import {
  markPriceCandlesSubscription,
  GqlOutPerpMarket,
  perpMarketSubscription,
  perpPositionsSubscription,
  oraclePricesSubscription,
  GqlOutOraclePrices,
  GqlOutPerpPositions,
} from "./subscription"
import { queryBatchHandler } from "./batchHandlers/queryBatchHandler"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a query function. */
export interface IHeartMonitor {
  readonly communityPool: (
    args: QueryCommunityPoolArgs,
    fields?: Partial<Token>
  ) => Promise<GqlOutCommunityPool>

  readonly delegations: (
    args: QueryDelegationsArgs,
    fields?: Partial<Delegation>
  ) => Promise<GqlOutDelegations>

  readonly distributionCommissions: (
    args: QueryDistributionCommissionsArgs,
    fields?: Partial<DistributionCommission>
  ) => Promise<GqlOutDistributionCommissions>

  readonly governance: (
    args: QueryGovernanceArgs,
    fields?: Partial<Governance>
  ) => Promise<GqlOutGovernance>

  readonly markPriceCandles: (
    args: QueryMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => Promise<GqlOutMarkPriceCandles>

  readonly markPriceCandlesSubscription: (
    args: SubscriptionMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
  >

  readonly oracle: (
    args: QueryOracleArgs,
    fields?: OracleFields
  ) => Promise<GqlOutOracle>

  readonly oraclePricesSubscription: (
    args: SubscriptionOraclePricesArgs,
    fields?: Partial<OraclePrice>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
  >

  readonly perp: (
    args: QueryPerpArgs,
    fields?: PerpFields
  ) => Promise<GqlOutPerp>

  readonly perpMarketSubscription: (
    args: SubscriptionPerpMarketArgs,
    fields?: Partial<PerpMarket>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
  >

  readonly perpPositionsSubscription: (
    args: SubscriptionPerpPositionsArgs,
    fields?: Partial<PerpPosition>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
  >

  readonly queryBatchHandler: (queryQueryString: string[]) => Promise<any>

  readonly redelegations: (
    args: QueryRedelegationsArgs,
    fields?: Partial<Redelegation>
  ) => Promise<GqlOutRedelegations>

  readonly spotLpPositions: (
    args: QuerySpotLpPositionsArgs,
    fields?: Partial<SpotLpPosition>
  ) => Promise<GqlOutSpotLpPositions>

  readonly spotPoolCreated: (
    args: QuerySpotPoolCreatedArgs,
    fields?: Partial<SpotPoolCreated>
  ) => Promise<GqlOutSpotPoolCreated>

  readonly spotPoolExited: (
    args: QuerySpotPoolExitedArgs,
    fields?: Partial<SpotPoolExited>
  ) => Promise<GqlOutSpotPoolExited>

  readonly spotPoolJoined: (
    args: QuerySpotPoolJoinedArgs,
    fields?: Partial<SpotPoolJoined>
  ) => Promise<GqlOutSpotPoolJoined>

  readonly spotPools: (
    args: QuerySpotPoolsArgs,
    fields?: Partial<SpotPool>
  ) => Promise<GqlOutSpotPools>

  readonly spotPoolSwap: (
    args: QuerySpotPoolSwapArgs,
    fields?: Partial<SpotPoolSwap>
  ) => Promise<GqlOutSpotPoolSwap>

  readonly stats: (
    args: QueryStatsArgs,
    fields?: StatsFields
  ) => Promise<GqlOutStats>

  readonly unbondings: (
    args: QueryUnbondingsArgs,
    fields?: Partial<Unbonding>
  ) => Promise<GqlOutUnbondings>

  readonly users: (
    args: QueryUsersArgs,
    fields?: Partial<User>
  ) => Promise<GqlOutUsers>

  readonly validators: (
    args: QueryValidatorsArgs,
    fields?: Partial<Validator>
  ) => Promise<GqlOutValidators>
}

/** HeartMonitor is an API for "Heart Monitor" that indexes the Nibiru blockchain
 * and stores the data in strucutred tables. Each of the `HeartMonitor`'s methods
 * corresponds to a query function. */
export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string
  defaultGqlEndpt = "https://hm-graphql.devnet-2.nibiru.fi/query"
  subscriptionClient: Client | undefined

  constructor(gqlEndpt?: string | { endptTm: string }, webSocketUrl?: string) {
    const chain = gqlEndpt as { endptTm: string }
    if (!gqlEndpt) {
      this.gqlEndpt = this.defaultGqlEndpt
    } else if (typeof gqlEndpt === "string") {
      this.gqlEndpt = gqlEndpt
    } else if (chain?.endptTm) {
      const endptFromRpc = gqlEndptFromTmRpc(chain?.endptTm)
      this.gqlEndpt = endptFromRpc ?? this.defaultGqlEndpt
    } else {
      this.gqlEndpt = this.defaultGqlEndpt
    }

    if (webSocketUrl) {
      this.subscriptionClient = createClient({
        url: webSocketUrl,
        ...(WebSocket ? { webSocketImpl: WebSocket } : {}),
      })
    }
  }

  communityPool = async (
    args: QueryCommunityPoolArgs,
    fields?: Partial<Token>
  ) => communityPool(args, this.gqlEndpt, fields)

  delegations = async (
    args: QueryDelegationsArgs,
    fields?: Partial<Delegation>
  ) => delegations(args, this.gqlEndpt, fields)

  distributionCommissions = async (
    args: QueryDistributionCommissionsArgs,
    fields?: Partial<DistributionCommission>
  ) => distributionCommissions(args, this.gqlEndpt, fields)

  governance = async (
    args: QueryGovernanceArgs,
    fields?: Partial<Governance>
  ) => governance(args, this.gqlEndpt, fields)

  markPriceCandles = async (
    args: QueryMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => markPriceCandles(args, this.gqlEndpt, fields)

  markPriceCandlesSubscription = async (
    args: SubscriptionMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => markPriceCandlesSubscription(args, this.subscriptionClient, fields)

  oracle = async (args: QueryOracleArgs, fields?: OracleFields) =>
    oracle(args, this.gqlEndpt, fields)

  oraclePricesSubscription = async (
    args: SubscriptionOraclePricesArgs,
    fields?: Partial<OraclePrice>
  ) => oraclePricesSubscription(args, this.subscriptionClient, fields)

  perp = async (args: QueryPerpArgs, fields?: PerpFields) =>
    perp(args, this.gqlEndpt, fields)

  perpMarketSubscription = async (
    args: SubscriptionPerpMarketArgs,
    fields?: Partial<PerpMarket>
  ) => perpMarketSubscription(args, this.subscriptionClient, fields)

  perpPositionsSubscription = async (
    args: SubscriptionPerpPositionsArgs,
    fields?: Partial<PerpPosition>
  ) => perpPositionsSubscription(args, this.subscriptionClient, fields)

  queryBatchHandler = async (queryQueryString: string[]) =>
    queryBatchHandler(queryQueryString, this.gqlEndpt)

  redelegations = async (
    args: QueryRedelegationsArgs,
    fields?: Partial<Redelegation>
  ) => redelegations(args, this.gqlEndpt, fields)

  spotLpPositions = async (
    args: QuerySpotLpPositionsArgs,
    fields?: Partial<SpotLpPosition>
  ) => spotLpPositions(args, this.gqlEndpt, fields)

  spotPoolCreated = async (
    args: QuerySpotPoolCreatedArgs,
    fields?: Partial<SpotPoolCreated>
  ) => spotPoolCreated(args, this.gqlEndpt, fields)

  spotPoolExited = async (
    args: QuerySpotPoolExitedArgs,
    fields?: Partial<SpotPoolExited>
  ) => spotPoolExited(args, this.gqlEndpt, fields)

  spotPoolJoined = async (
    args: QuerySpotPoolJoinedArgs,
    fields?: Partial<SpotPoolJoined>
  ) => spotPoolJoined(args, this.gqlEndpt, fields)

  spotPools = async (args: QuerySpotPoolsArgs, fields?: Partial<SpotPool>) =>
    spotPools(args, this.gqlEndpt, fields)

  spotPoolSwap = async (
    args: QuerySpotPoolSwapArgs,
    fields?: Partial<SpotPoolSwap>
  ) => spotPoolSwap(args, this.gqlEndpt, fields)

  stats = async (args: QueryStatsArgs, fields?: StatsFields) =>
    stats(args, this.gqlEndpt, fields)

  unbondings = async (args: QueryUnbondingsArgs, fields?: Partial<Unbonding>) =>
    unbondings(args, this.gqlEndpt, fields)

  users = async (args: QueryUsersArgs, fields?: Partial<User>) =>
    users(args, this.gqlEndpt, fields)

  validators = async (args: QueryValidatorsArgs, fields?: Partial<Validator>) =>
    validators(args, this.gqlEndpt, fields)
}
