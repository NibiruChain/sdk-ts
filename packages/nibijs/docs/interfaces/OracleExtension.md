[NibiJS Documentation - v0.21.7](../intro.md) / [Exports](../modules.md) / OracleExtension

# Interface: OracleExtension

## Table of contents

### Properties

- [oracle](OracleExtension.md#oracle)

## Properties

### oracle

• **oracle**: `Readonly`<{ `actives`: () => `Promise`<`QueryActivesResponse`\> ; `aggregatePrevote`: (`oracle`: `string`) => `Promise`<`undefined` \| `AggregateExchangeRatePrevote`\> ; `aggregatePrevotes`: () => `Promise`<`AggregateExchangeRatePrevote`[]\> ; `aggregateVote`: (`oracle`: `string`) => `Promise`<`undefined` \| `AggregateExchangeRateVote`\> ; `aggregateVotes`: () => `Promise`<`AggregateExchangeRateVote`[]\> ; `exchangeRate`: (`pair`: `string`) => `Promise`<`number`\> ; `exchangeRates`: () => `Promise`<`ExchangeRatesMap`\> ; `feeder`: (`oracle`: `string`) => `Promise`<`string`\> ; `missCount`: (`oracle`: `string`) => `Promise`<`number`\> ; `params`: () => `Promise`<`QueryParamsResponse`\> ; `voteTargets`: () => `Promise`<`string`[]\> }\>

#### Defined in

[query/oracle.ts:37](https://github.com/NibiruChain/ts-sdk/blob/a41de73/packages/nibijs/src/query/oracle.ts#L37)
