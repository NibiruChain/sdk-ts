[NibiJS Documentation - v0.21.25](../intro.md) / [Exports](../modules.md) / PerpExtension

# Interface: PerpExtension

## Table of contents

### Properties

- [perp](PerpExtension.md#perp)

## Properties

### perp

• **perp**: `Readonly`<{ `markets`: () => `Promise`<`QueryMarketsResponse`\> ; `moduleAccounts`: () => `Promise`<`QueryModuleAccountsResponse`\> ; `position`: (`args`: { `pair`: `string` ; `trader`: `string` }) => `Promise`<`QueryPositionResponse`\> ; `positions`: (`args`: { `trader`: `string` }) => `Promise`<`QueryPositionsResponse`\> }\>

#### Defined in

[query/perp.ts:24](https://github.com/NibiruChain/ts-sdk/blob/317eea5/packages/nibijs/src/query/perp.ts#L24)
