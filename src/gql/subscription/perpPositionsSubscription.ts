import { Client, ExecutionResult } from "graphql-ws"
import {
  defaultPerpPosition,
  GQLSubscriptionGqlPerpPositionsArgs,
  GQLPerpPosition,
  GQLSubscription,
  gqlQuery,
  convertObjectToPropertiesString,
} from ".."

export interface GqlOutPerpPositions {
  perpPositions?: GQLSubscription["perpPositions"]
}

export const perpPositionsSubscriptionQueryString = (
  args: Partial<GQLSubscriptionGqlPerpPositionsArgs>,
  fields?: Partial<GQLPerpPosition>
) =>
  gqlQuery(
    "perpPositions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpPosition),
    true
  )

export const perpPositionsSubscription = async (
  args: Partial<GQLSubscriptionGqlPerpPositionsArgs>,
  client?: Client,
  fields?: Partial<GQLPerpPosition>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
> =>
  client?.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
