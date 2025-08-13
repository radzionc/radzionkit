import { shouldBePresent } from './assert/shouldBePresent'

type FormatAmountOptions = {
  currency?: string
  kind?: 'compact' | 'full'
}

const defaultOptions: FormatAmountOptions = {
  currency: 'USD',
  kind: 'full',
}

const units = ['thousand', 'million', 'billion'] as const

type Unit = (typeof units)[number]

const unitMultipliers: Record<Unit, number> = {
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
}

const unitSuffixes: Record<Unit, string> = {
  thousand: 'K',
  million: 'M',
  billion: 'B',
}

const defaultFractionDigits = 2

const getFractionDigits = (amount: number): number => {
  const amountStr = amount.toFixed(20)
  if (amountStr.startsWith('0') && amount > 0) {
    const fractionPartDigits = amountStr.split('.')[1].split('')

    const nonZeroDigitIndex = fractionPartDigits.findIndex(
      (digit) => digit !== '0',
    )

    if (nonZeroDigitIndex < 0) {
      return defaultFractionDigits
    }

    const isFollowingZero = fractionPartDigits[nonZeroDigitIndex + 1] === '0'

    return nonZeroDigitIndex + (isFollowingZero ? 1 : 2)
  }

  return defaultFractionDigits
}

export const formatAmount = (
  value: number,
  options: FormatAmountOptions = defaultOptions,
): string => {
  const { currency, kind } = { ...defaultOptions, ...options }

  if (kind === 'full' || value < unitMultipliers[units[0]]) {
    const fractionDigits = getFractionDigits(value)

    return value.toLocaleString('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    })
  }

  const unit = shouldBePresent(
    units.toReversed().find((unit) => value >= unitMultipliers[unit]),
  )

  return `${formatAmount(value / unitMultipliers[unit], options)}${unitSuffixes[unit]}`
}
