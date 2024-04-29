import BigNumber from "bignumber.js"
import { Params } from "src/protojs/nibiru/inflation/v1/genesis"

export const polynomial = (factors: string[], x: BigNumber) => {
  let result = BigNumber(0)
  for (let i = 0; i < factors.length; i++) {
    result = result.plus(
      BigNumber(factors[i]).times(x.pow(factors.length - i - 1))
    )
  }

  // Multiply by 1 million to get the value in a specific unit
  return result
}

export const calculateEpochMintProvision = (
  params: Params,
  period: BigNumber
) => {
  // Calculate the value of the polynomial at x
  const polynomialValue = polynomial(params.polynomialFactors, period)

  return polynomialValue.lt(0) ||
    params.epochsPerPeriod.eq(0) ||
    params.maxPeriod.lt(period.toString())
    ? BigNumber(0)
    : polynomialValue
}

export const computeAPR = (
  myStake: number,
  totalStaked: number,
  params: Params,
  period: number
) => {
  // get epoch mint
  const annualReward = calculateEpochMintProvision(params, BigNumber(period))
    .times(params.inflationDistribution?.stakingRewards ?? 0)
    .times(12)

  return BigNumber(myStake)
    .div(myStake + totalStaked)
    .times(annualReward)
    .div(myStake)
    .toNumber()
}
