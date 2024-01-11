# Queries

- [Queries](#queries)
  - [balances](#balances)
  - [fundingRates](#fundingrates)
  - [liquidations](#liquidations)
  - [markPriceCandles](#markpricecandles)
    - [`order: MarkPriceCandlesOrder`](#order-markpricecandlesorder)
  - [markPrices](#markprices)
  - [oraclePrices](#oracleprices)
  - [positionChanges](#positionchanges)
  - [positions](#positions)
  - [statsVolume](#statsvolume)
  - [transfers](#transfers)
  - [txMessages](#txmessages)
  - [txMessagesFailed](#txmessagesfailed)
  - [unbondings](#unbondings)
  - [validators](#validators)
  - [vpoolConfigs](#vpoolconfigs)

## balances

TODO docs

```graphql
balances(
  where: BalancesFilter
  order: BalancesOrder
  orderDesc: Boolean
  limit: Int): [Balances]
```

TODO docs

```graphql
blockEvents(
  where: BlockEventsFilter
  order: BlockEventsOrder
  orderDesc: Boolean
  limit: Int): [BlockEvents]
```

TODO docs

```graphql
blockEventsFailed(
  where: BlockEventsFailedFilter
  order: BlockEventsFailedOrder
  orderDesc: Boolean
  limit: Int): [BlockEventsFailed]
```

TODO docs

```graphql
delegations(
  where: DelegationsFilter
  order: DelegationsOrder
  orderDesc: Boolean
  limit: Int): [Delegations]
```

#### Query Example - delegations

```graphql
{
  # TODO missing fields: where, order
  delegations(orderDesc: true, limit: 3) {
    validatorAddress
    delegatorAddress
    shares
    balance
    block
    blockTs
  }
}
```

#### Response Example - delegations

```json
{
  "data": {
    "delegations": [
      {
        "validatorAddress": "nibivaloper1d7zygazerfwx4l362tnpcp0ramzm97xvv9ryxr",
        "delegatorAddress": "nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl",
        "shares": 6,
        "balance": "{\"amount\":6,\"denom\":\"unibi\"}",
        "block": 791341,
        "blockTs": "2023-02-22T22:12:18.507059+00:00"
      },
      {
        "validatorAddress": "nibivaloper1d7zygazerfwx4l362tnpcp0ramzm97xvv9ryxr",
        "delegatorAddress": "nibi1d7zygazerfwx4l362tnpcp0ramzm97xv97dlj7",
        "shares": 500000000,
        "balance": "{\"amount\":500000000,\"denom\":\"unibi\"}",
        "block": 791341,
        "blockTs": "2023-02-22T22:12:18.507059+00:00"
      },
      {
        "validatorAddress": "nibivaloper1d7zygazerfwx4l362tnpcp0ramzm97xvv9ryxr",
        "delegatorAddress": "nibi1jle8khj3aennq24zx6g93aam9rt0fqhgyp4h52",
        "shares": 52,
        "balance": "{\"amount\":52,\"denom\":\"unibi\"}",
        "block": 791341,
        "blockTs": "2023-02-22T22:12:18.507059+00:00"
      }
    ]
  }
}
```

## fundingRates

TODO docs

```graphql
fundingRates(
  where: FundingRatesFilter
  order: FundingRatesOrder
  orderDesc: Boolean
  limit: Int): [FundingRates]
```

## liquidations

TODO docs

```graphql
liquidations(
  where: LiquidationsFilter
  order: LiquidationsOrder
  orderDesc: Boolean
  limit: Int): [Liquidations]
```

## markPriceCandles

TODO docs

```graphql
markPriceCandles(
  where: MarkPriceCandlesFilter
  order: MarkPriceCandlesOrder
  orderDesc: Boolean
  limit: Int): [MarkPriceCandles]
```

#### In English

- The above code block means that there is a query function called `markPriceCandles` with four arguments, `where`, `order`, `orderDesc`, and `limit`, that returns `[MarkPriceCandles]`.
- The `[MarkPriceCandles]` type means that "list of `MarkPriceCandles` objects".

#### `MarkPriceCandles`

```graphql
type MarkPriceCandles {
  pair: String
  open: Int
  close: Int
  low: Int
  high: Int
  period: Float
  periodStartTs: DateTime
}
```

ANKI `Boolean` in GraphQL means `true` or `false`.

The `where` parameter has options for filtering based on conditions for each field. The filter condition must match the type of the corresponding field. Examples include:

```graphql
where: { pairEq: "ubtc:unusd" }
where: { lowGt: 100 }
where: { periodStartTsLt: "2023-02-22" }
```

Every field, e.g. `pair`, `open`, `close`, `period`, has filter options. In the case of `MarkPriceCandles`, every field has methods for:

- `=` : `Eq` : equals
- `>` : `Gt` : greater than
- `<` : `Lt` : less than
- `>=` : `Gte` : greater than or equal
- `<=` : `Lte` : less than or equal

Except, `pair`, which only has the `pairEq` method.

### `order: MarkPriceCandlesOrder`

```graphql
markPriceCandles(
  where: MarkPriceCandlesFilter
  order: MarkPriceCandlesOrder
  orderDesc: Boolean
  limit: Int): [MarkPriceCandles]
```

```graphql
type MarkPriceCandlesOrder {
  pair
  open
  close
  low
  high
  period
  period_start_ts
}
```

This means we can use one of these values with the `order` argument in the query like follows:

```graphql
order: pair
order: close
order: period_start_ts
```

## markPrices

TODO docs

```graphql
markPrices(
  where: MarkPricesFilter
  order: MarkPricesOrder
  orderDesc: Boolean
  limit: Int): [MarkPrices]
```

## oraclePrices

TODO docs

```graphql
oraclePrices(
  where: OraclePricesFilter
  order: OraclePricesOrder
  orderDesc: Boolean
  limit: Int): [OraclePrices]
```

## positionChanges

TODO docs

```graphql
positionChanges(
  where: PositionChangesFilter
  order: PositionChangesOrder
  orderDesc: Boolean
  limit: Int): [PositionChanges]
```

## positions

TODO docs

```graphql
positions(
  where: PositionsFilter
  order: PositionsOrder
  orderDesc: Boolean
  limit: Int): [Positions]
```

## statsVolume

TODO docs

```graphql
statsVolume(
  where: StatsVolumeFilter
  order: StatsVolumeOrder
  orderDesc: Boolean
  limit: Int): [StatsVolume]
```

## transfers

TODO docs

```graphql
transfers(
  where: TransfersFilter
  order: TransfersOrder
  orderDesc: Boolean
  limit: Int): [Transfers]
```

## txMessages

TODO docs

```graphql
txMessages(
  where: TxMessagesFilter
  order: TxMessagesOrder
  orderDesc: Boolean
  limit: Int): [TxMessages]
```

## txMessagesFailed

TODO docs

```graphql
txMessagesFailed(
  where: TxMessagesFailedFilter
  order: TxMessagesFailedOrder
  orderDesc: Boolean
  limit: Int): [TxMessagesFailed]
```

## unbondings

TODO docs

```graphql
unbondings(
  where: UnbondingsFilter
  order: UnbondingsOrder
  orderDesc: Boolean
  limit: Int): [Unbondings]
```

## validators

TODO docs

```graphql
validators(
  where: ValidatorsFilter
  order: ValidatorsOrder
  orderDesc: Boolean
  limit: Int): [Validators]
```

## vpoolConfigs

TODO docs

```graphql
vpoolConfigs(
  where: VpoolConfigsFilter
  order: VpoolConfigsOrder
  orderDesc: Boolean
  limit: Int): [VpoolConfigs]
```
