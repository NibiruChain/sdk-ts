import { defaultUserContract } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQuery,
  GQLUserContract,
  GQLWasmGqlUserContractsArgs,
} from "../gql/generated"

export type QueryWasmArgs = {
  userContracts?: GQLWasmGqlUserContractsArgs
}

export interface GqlOutWasm {
  wasm?: GQLQuery["wasm"]
}

export type GqlWasmFields = Partial<{
  userContracts?: Partial<GQLUserContract>
}>

export const wasmQueryString = (
  args: QueryWasmArgs,
  fields?: GqlWasmFields
) => {
  const oracleQuery: string[] = []

  if (fields?.userContracts) {
    oracleQuery.push(
      gqlQuery(
        "userContracts",
        args.userContracts ?? {},
        convertObjectToPropertiesString(fields.userContracts),
        true
      )
    )
  }

  // Default Objects

  if (args.userContracts && !fields?.userContracts) {
    oracleQuery.push(
      gqlQuery(
        "userContracts",
        args.userContracts,
        convertObjectToPropertiesString(defaultUserContract),
        true
      )
    )
  }

  return `
        wasm {
          ${oracleQuery.join("\n")}
        }
      `
}

export const wasm = async (
  args: QueryWasmArgs,
  endpt: string,
  fields?: GqlWasmFields
): Promise<GqlOutWasm> =>
  doGqlQuery(
    `{
        ${wasmQueryString(args, fields)}
      }`,
    endpt
  )
