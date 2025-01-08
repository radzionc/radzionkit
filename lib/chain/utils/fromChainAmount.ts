export const fromChainAmount = (
  amount: bigint | number | string,
  decimals: number,
) => {
  return Number(amount) / Math.pow(10, decimals)
}
