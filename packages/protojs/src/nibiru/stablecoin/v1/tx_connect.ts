// @generated by protoc-gen-connect-es v0.10.1 with parameter "target=ts"
// @generated from file nibiru/stablecoin/v1/tx.proto (package nibiru.stablecoin.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  MsgBurnStable,
  MsgBurnStableResponse,
  MsgBuyback,
  MsgBuybackResponse,
  MsgMintStable,
  MsgMintStableResponse,
  MsgRecollateralize,
  MsgRecollateralizeResponse,
} from "./tx_pb.js"
import { MethodKind } from "@bufbuild/protobuf"

/**
 * Msg defines the x/stablecoin Msg service.
 *
 * @generated from service nibiru.stablecoin.v1.Msg
 */
export const Msg = {
  typeName: "nibiru.stablecoin.v1.Msg",
  methods: {
    /**
     * MintStable defines a method for trading a mixture of GOV and COLL to mint
     * an equivalent value of stablecoins.
     *
     * @generated from rpc nibiru.stablecoin.v1.Msg.MintStable
     */
    mintStable: {
      name: "MintStable",
      I: MsgMintStable,
      O: MsgMintStableResponse,
      kind: MethodKind.Unary,
    },
    /**
     * BurnStable defines a method for redeeming/burning stablecoins to receive an
     * equivalent value as a mixture of governance and collateral tokens.
     *
     * @generated from rpc nibiru.stablecoin.v1.Msg.BurnStable
     */
    burnStable: {
      name: "BurnStable",
      I: MsgBurnStable,
      O: MsgBurnStableResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Recollateralize defines a method for manually adding collateral to the
     * protocol in exchange for an equivalent stablecoin value in governance tokens
     * plus a small bonus.
     *
     * @generated from rpc nibiru.stablecoin.v1.Msg.Recollateralize
     */
    recollateralize: {
      name: "Recollateralize",
      I: MsgRecollateralize,
      O: MsgRecollateralizeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Buyback defines a method for manually adding NIBI to the protocol
     * in exchange for an equivalent stablecoin value in collateral, effectively
     * executing a share buyback for Nibiru Chain. The NIBI purchased by the protocol
     * is then burned, distributing value to all NIBI hodlers.
     *
     * @generated from rpc nibiru.stablecoin.v1.Msg.Buyback
     */
    buyback: {
      name: "Buyback",
      I: MsgBuyback,
      O: MsgBuybackResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
