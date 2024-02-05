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
  `mutation {
    marketing {
      ${gqlQuery(
        "updateTwitterUser",
        args.updateTwitterUser ?? {},
        fields
          ? convertObjectToPropertiesString(fields)
          : convertObjectToPropertiesString(defaultTwitterUser),
        excludeParentObject
      )}
    }
  }`

export const marketingMutation = async (
  args: Partial<MutationMarketingArgs>,
  endpt: string,
  headers: HeadersInit,
  fields?: Partial<GQLTwitterUser>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(marketingMutationString(args, true, fields), endpt, headers)
