import {
  checkFields,
  queryBatchHandler,
  GqlOutCommunityPool,
  communityPoolQueryString,
  arg,
  defaultToken,
  GqlOutFeatureFlags,
  defaultFeatureFlags,
  featureFlagsQueryString,
} from ".."

describe("queryBatchHandler tests", () => {
  test("queryBatchHandler", async () => {
    const resp = await queryBatchHandler<{
      communityPool: GqlOutCommunityPool[]
      featureFlags: GqlOutFeatureFlags
    }>(
      [
        communityPoolQueryString({}, true, defaultToken),

        featureFlagsQueryString(true, defaultFeatureFlags),
      ],
      "https://hm-graphql.testnet-1.nibiru.fi/query"
    )
    expect(resp).toHaveProperty("communityPool")
    expect(resp).toHaveProperty("featureFlags")

    if ((resp.communityPool?.length ?? 0) > 0) {
      const [communityPool] = resp.communityPool ?? []

      checkFields([communityPool], ["amount", "denom"])
    }

    if (resp.featureFlags) {
      const { featureFlags } = resp

      checkFields(
        [featureFlags],
        ["gov", "oracle", "perp", "spot", "staking", "wasm"]
      )
    }
  })

  test("arg", async () => {
    const result = arg("mock", "mock", false)
    expect(result).toEqual(`mock: "mock"`)
  })
})
