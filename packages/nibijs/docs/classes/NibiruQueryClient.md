[NibiJS Documentation - v0.21.42](../intro.md) / [Exports](../modules.md) / NibiruQueryClient

# Class: NibiruQueryClient

Querier for a Nibiru network.

**`Example`**

```ts
import { NibiruQueryClient, Tesnet } from "@nibiruchain/nibijs"
const chain = Testnet()
const querier = await NibiruQueryClient.connect(chain.endptTm)
```

## Hierarchy

- `StargateClient`

  ↳ **`NibiruQueryClient`**

## Table of contents

### Constructors

- [constructor](NibiruQueryClient.md#constructor)

### Properties

- [nibiruExtensions](NibiruQueryClient.md#nibiruextensions)
- [tm](NibiruQueryClient.md#tm)
- [wasmClient](NibiruQueryClient.md#wasmclient)

### Methods

- [getTxByHash](NibiruQueryClient.md#gettxbyhash)
- [getTxByHashBytes](NibiruQueryClient.md#gettxbyhashbytes)
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

[query/query.ts:66](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L66)

## Properties

### nibiruExtensions

• `Readonly` **nibiruExtensions**: [`NibiruExtensions`](../modules.md#nibiruextensions)

#### Defined in

[query/query.ts:53](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L53)

---

### tm

• `Readonly` **tm**: `Tendermint37Client`

#### Defined in

[query/query.ts:55](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L55)

---

### wasmClient

• `Readonly` **wasmClient**: `CosmWasmClient`

#### Defined in

[query/query.ts:54](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L54)

## Methods

### getTxByHash

▸ **getTxByHash**(`txHashHex`): `Promise`<[`Result`](Result.md)<`TxResponse`\>\>

getTxByHash: Query a transaction (tx) using its hexadecial encoded tx hash.
A tx hash uniquely identifies a tx on the blockchain.

The hex-encoded tx hash is:

- An unambiguous representation of the SHA-256 cryptographic hash in the
  consensus layer.
- Well-suited for human-facing applications, as it is easier to work with
  than bytes.

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `txHashHex` | `string` |

#### Returns

`Promise`<[`Result`](Result.md)<`TxResponse`\>\>

**`Example`**

```ts
const txHash =
  "7A919F2CC9A51B139444F7D8E84A46EEF307E839C6CA914C1A1C594FEF5C1562"
const txRespResult = await getTxByHash(txHash)
```

#### Defined in

[query/query.ts:122](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L122)

---

### getTxByHashBytes

▸ **getTxByHashBytes**(`txHash`): `Promise`<[`Result`](Result.md)<`TxResponse`\>\>

getTxByHashBytes: Query a transaction (tx) using its SHA-256 tx hash (bytes).
A tx hash uniquely identifies a tx on the blockchain.

#### Parameters

| Name     | Type         |
| :------- | :----------- |
| `txHash` | `Uint8Array` |

#### Returns

`Promise`<[`Result`](Result.md)<`TxResponse`\>\>

**`See`**

getTxByHash - Equivalent query using the hex-encoded tx hash string.

#### Defined in

[query/query.ts:136](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L136)

---

### waitForHeight

▸ **waitForHeight**(`height`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `height` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:92](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L92)

---

### waitForNextBlock

▸ **waitForNextBlock**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[query/query.ts:100](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L100)

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

[query/query.ts:57](https://github.com/NibiruChain/ts-sdk/blob/f607ea4/packages/nibijs/src/query/query.ts#L57)
