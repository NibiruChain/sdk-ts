import {
  defaultTwitterUser,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLUpdateTwitterUserInput,
  GQLMutation,
  GQLTwitterUser,
} from ".."

export type MutationMarketingArgs = {
  updateTwitterUser: GQLUpdateTwitterUserInput
}

export interface GqlOutMarketingMutation {
  marketing?: GQLMutation["marketing"]
}

export const marketingMutationString = (
  args: Partial<MutationMarketingArgs>,
  excludeParentObject: boolean,
  fields?: Partial<GQLTwitterUser>
) =>
  gqlQuery(
    "marketing",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultTwitterUser),
    excludeParentObject,
    true
  )

export const marketingMutation = async (
  args: Partial<MutationMarketingArgs>,
  endpt: string,
  authorizationHeader: HeadersInit,
  fields?: Partial<GQLTwitterUser>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(
    marketingMutationString(args, false, fields),
    endpt,
    authorizationHeader
  )
