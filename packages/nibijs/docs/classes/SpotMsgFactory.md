[NibiJS Documentation - v0.19.19](../intro.md) / [Exports](../modules.md) / SpotMsgFactory

# Class: SpotMsgFactory

## Table of contents

### Constructors

- [constructor](SpotMsgFactory.md#constructor)

### Methods

- [createPool](SpotMsgFactory.md#createpool)
- [exitPool](SpotMsgFactory.md#exitpool)
- [joinPool](SpotMsgFactory.md#joinpool)
- [swapAssets](SpotMsgFactory.md#swapassets)

## Constructors

### constructor

• **new SpotMsgFactory**()

## Methods

### createPool

▸ `Static` **createPool**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgCreatePool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:73](https://github.com/NibiruChain/ts-sdk/blob/f06ff7b1/packages/nibijs/src/msg/spot.ts#L73)

___

### exitPool

▸ `Static` **exitPool**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgExitPool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:98](https://github.com/NibiruChain/ts-sdk/blob/f06ff7b1/packages/nibijs/src/msg/spot.ts#L98)

___

### joinPool

▸ `Static` **joinPool**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgJoinPool` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:86](https://github.com/NibiruChain/ts-sdk/blob/f06ff7b1/packages/nibijs/src/msg/spot.ts#L86)

___

### swapAssets

▸ `Static` **swapAssets**(`msg`): [`TxMessage`](../interfaces/TxMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `MsgSwapAssets` |

#### Returns

[`TxMessage`](../interfaces/TxMessage.md)

#### Defined in

[msg/spot.ts:109](https://github.com/NibiruChain/ts-sdk/blob/f06ff7b1/packages/nibijs/src/msg/spot.ts#L109)
