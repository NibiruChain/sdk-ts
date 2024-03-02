import {
  defaultMarkPriceCandles,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQueryGqlMarkPriceCandlesArgs,
  GQLQuery,
  GQLMarkPriceCandle,
  DeepPartial,
} from ".."

export interface GqlOutMarkPriceCandles {
  markPriceCandles?: GQLQuery["markPriceCandles"]
}

export const markPriceCandlesQueryString = (
  args: GQLQueryGqlMarkPriceCandlesArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLMarkPriceCandle>
) =>
  gqlQuery(
    "markPriceCandles",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultMarkPriceCandles),
    excludeParentObject
  )

export const markPriceCandles = async (
  args: GQLQueryGqlMarkPriceCandlesArgs,
  endpt: string,
  fields?: DeepPartial<GQLMarkPriceCandle>
): Promise<GqlOutMarkPriceCandles> =>
  doGqlQuery(markPriceCandlesQueryString(args, false, fields), endpt)
