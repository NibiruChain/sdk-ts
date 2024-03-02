import {
  convertObjectToPropertiesString,
  DeepPartial,
  defaultLike,
  defaultTask,
  defaultTweet,
  defaultTwitterUser,
  doGqlQuery,
  GQLLike,
  GQLMarketingQueryGqlLikesArgs,
  GQLMarketingQueryGqlTasksArgs,
  GQLMarketingQueryGqlTweetsArgs,
  GQLMarketingQueryGqlTwitterUserArgs,
  gqlQuery,
  GQLQuery,
  GQLTask,
  GQLTweet,
  GQLTwitterUser,
} from ".."

export type QueryMarketingArgs = {
  twitterUser?: GQLMarketingQueryGqlTwitterUserArgs
  tweets?: GQLMarketingQueryGqlTweetsArgs
  likes?: GQLMarketingQueryGqlLikesArgs
  tasks?: GQLMarketingQueryGqlTasksArgs
}

export interface GqlOutMarketingQuery {
  marketing?: GQLQuery["marketing"]
}

export type MarketingFields = DeepPartial<{
  twitterUser?: DeepPartial<GQLTwitterUser>
  tweets?: DeepPartial<GQLTweet>
  likes?: DeepPartial<GQLLike>
  tasks?: DeepPartial<GQLTask>
}>

export const marketingQueryString = (
  args: QueryMarketingArgs,
  fields?: MarketingFields
) => {
  const marketingQuery: string[] = []

  if (fields?.twitterUser) {
    marketingQuery.push(
      gqlQuery(
        "twitterUser",
        args.twitterUser ?? {},
        convertObjectToPropertiesString(fields.twitterUser),
        true
      )
    )
  }

  if (fields?.tweets) {
    marketingQuery.push(
      gqlQuery(
        "tweets",
        args.tweets ?? {},
        convertObjectToPropertiesString(fields.tweets),
        true
      )
    )
  }

  if (fields?.likes) {
    marketingQuery.push(
      gqlQuery(
        "likes",
        args.likes ?? {},
        convertObjectToPropertiesString(fields.likes),
        true
      )
    )
  }

  if (fields?.tasks) {
    marketingQuery.push(
      gqlQuery(
        "tasks",
        args.tasks ?? {},
        convertObjectToPropertiesString(fields.tasks),
        true
      )
    )
  }

  // Default Objects

  if (args.likes && !fields?.likes) {
    marketingQuery.push(
      gqlQuery(
        "likes",
        args.likes,
        convertObjectToPropertiesString(defaultLike),
        true
      )
    )
  }

  if (args.tasks && !fields?.tasks) {
    marketingQuery.push(
      gqlQuery(
        "tasks",
        args.tasks,
        convertObjectToPropertiesString(defaultTask),
        true
      )
    )
  }

  if (args.tweets && !fields?.tweets) {
    marketingQuery.push(
      gqlQuery(
        "tweets",
        args.tweets,
        convertObjectToPropertiesString(defaultTweet),
        true
      )
    )
  }

  if (args.twitterUser && !fields?.twitterUser) {
    marketingQuery.push(
      gqlQuery(
        "twitterUser",
        args.twitterUser,
        convertObjectToPropertiesString(defaultTwitterUser),
        true
      )
    )
  }

  return `
        marketing {
          ${marketingQuery.join("\n")}
        }
      `
}

export const marketingQuery = async (
  args: QueryMarketingArgs,
  endpt: string,
  fields?: MarketingFields
): Promise<GqlOutMarketingQuery> =>
  doGqlQuery(
    `{
        ${marketingQueryString(args, fields)}
      }`,
    endpt
  )
