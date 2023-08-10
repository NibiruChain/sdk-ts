[NibiJS Documentation - v0.21.9](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

# Class: NibiruQueryClient

## Hierarchy

- `StargateClient`

  ↳ **`NibiruQueryClient`**

## Table of contents

### Constructors

- [constructor](NibiruQueryClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruQueryClient.md#nibiruextensions)
- [wasmClient](NibiruQueryClient.md#wasmclient)

### Methods

- [waitForHeight](NibiruQueryClient.md#waitforheight)
- [waitForNextBlock](NibiruQueryClient.md#waitfornextblock)
- [connect](NibiruQueryClient.md#connect)

## Constructors

### constructor

• `Protected` **new NibiruQueryClient**(`tmClient`, `options`, `wasmClient`)

#### Parameters

| Name         | Type                    |
| :----------- | :---------------------- |
| `tmClient`   | `Tendermint37Client`    |
| `options`    | `StargateClientOptions` |
| `wasmClient` | `CosmWasmClient`        |

#### Overrides

StargateClient.constructor

#### Defined in

[query/query.ts:56](https://github.com/NibiruChain/ts-sdk/blob/6e888c2/packages/nibijs/src/query/query.ts#L56)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:44](https://github.com/NibiruChain/ts-sdk/blob/6e888c2/packages/nibijs/src/query/query.ts#L44)

---

### wasmClient

• `Readonly` **wasmClient**: `CosmWasmClient`

#### Defined in

[query/query.ts:45](https://github.com/NibiruChain/ts-sdk/blob/6e888c2/packages/nibijs/src/query/query.ts#L45)

## Methods

### waitForHeight

▸ **waitForHeight**(`height`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `height` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:80](https://github.com/NibiruChain/ts-sdk/blob/6e888c2/packages/nibijs/src/query/query.ts#L80)

---

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:88](https://github.com/NibiruChain/ts-sdk/blob/6e888c2/packages/nibijs/src/query/query.ts#L88)

---

### connect

▸ `Static` **connect**(`endpoint`, `options?`): `Promise`<[`NibiruQueryClient`](NibiruQueryClient.md)\>

#### Parameters

| Name       | Type                    |
| :--------- | :---------------------- |
| `endpoint` | `string`                |
| `options`  | `StargateClientOptions` |

#### Returns

`Promise`<[`NibiruQueryClient`](NibiruQueryClient.md)\>

#### Overrides

StargateClient.connect

#### Defined in

[query/query.ts:47](https://github.com/NibiruChain/ts-sdk/blob/6e888c2/packages/nibijs/src/query/query.ts#L47)
