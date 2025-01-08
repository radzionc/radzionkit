export const toChainAmount = (amount: number, decimals: number) => {
  return BigInt(Math.round(amount * 10 ** decimals))
}
