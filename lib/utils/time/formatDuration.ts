import { convertDuration } from './convertDuration'
import { pluralize } from '../pluralize'
import { durationUnitName, DurationUnit, durationUnits } from './DurationUnit'
import { match } from '../match'
import { padWithZero } from '../padWithZero'
import { isEmpty } from '../array/isEmpty'

type FormatDurationKind = 'short' | 'long' | 'digitalClock'

interface FormatDurationOptions {
  maxUnit?: DurationUnit
  minUnit?: DurationUnit
  kind?: FormatDurationKind
}

export const formatDuration = (
  duration: number,
  durationUnit: DurationUnit,
  options: FormatDurationOptions = {},
) => {
  if (duration < 0) {
    formatDuration(Math.abs(duration), durationUnit, options)
  }

  const kind = options.kind ?? 'short'
  const maxUnit = options.maxUnit || 'd'
  const minUnit = options.minUnit || 'min'

  const maxUnitIndex = durationUnits.indexOf(maxUnit)
  const minUnitIndex = durationUnits.indexOf(minUnit)
  if (maxUnitIndex < minUnitIndex) {
    throw new Error('maxUnit must be greater than minUnit')
  }

  const units = durationUnits.slice(minUnitIndex, maxUnitIndex + 1).reverse()
  const result: string[] = []
  units.forEach((unit, index) => {
    const convertedValue = convertDuration(duration, durationUnit, unit)
    const isLastUnit = index === units.length - 1

    const wholeValue = isLastUnit
      ? Math.round(convertedValue)
      : Math.floor(convertedValue)
    duration -= convertDuration(wholeValue, unit, durationUnit)

    if (wholeValue === 0) {
      if (kind === 'digitalClock') {
        if (index < units.length - 2 && isEmpty(result)) {
          return
        }
      } else if (!isLastUnit || !isEmpty(result)) {
        return
      }
    }

    const value = match(kind, {
      short: () => `${wholeValue}${unit.slice(0, 1)}`,
      long: () => pluralize(wholeValue, durationUnitName[unit]),
      digitalClock: () => padWithZero(wholeValue),
    })

    result.push(value)
  })

  return result.join(kind === 'digitalClock' ? ':' : ' ')
}
