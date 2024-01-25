const million = 1000000
const billion = 1000000000

const getFractionDigits = (amount: number): number => {
  const amountStr = amount.toString()
  if (amountStr.startsWith('0') && amount > 0) {
    const nonZeroDigitIndex = amountStr
      .split('')
      .findIndex((digit) => digit !== '0' && digit !== '.')

    return nonZeroDigitIndex
  }

  return 2
}

export const formatAmount = (amount: number): string => {
  if (amount > billion) {
    return `${formatAmount(amount / billion)}B`
  }
  if (amount > million) {
    return `${formatAmount(amount / million)}M`
  }

  const fractionDigits = getFractionDigits(amount)

  const formatter = new Intl.NumberFormat('en-us', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })

  return formatter.format(amount)
}
