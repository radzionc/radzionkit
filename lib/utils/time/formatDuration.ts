import { convertDuration } from './convertDuration'
import { pluralize } from '../pluralize'
import {
  durationUnitName,
  DurationUnit,
  durationUnits,
  shortDurationUnitName,
} from './DurationUnit'
import { match } from '../match'
import { padWithZero } from '../padWithZero'
import { isEmpty } from '../array/isEmpty'
import { getLastItem } from '../array/getLastItem'

type FormatDurationKind = 's' | 'm' | 'l' | 'digitalClock'

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

  const kind = options.kind ?? 's'
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

    let wholeValue = isLastUnit
      ? Math.round(convertedValue)
      : Math.floor(convertedValue)

    duration -= convertDuration(wholeValue, unit, durationUnit)

    const isBeforeLastUnit = index === units.length - 2
    if (
      isBeforeLastUnit &&
      Math.round(
        convertDuration(duration, durationUnit, getLastItem(units)),
      ) === convertDuration(1, unit, getLastItem(units))
    ) {
      wholeValue += 1
      duration = 0
    }

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
      s: () => `${wholeValue}${unit.slice(0, 1)}`,
      m: () => `${wholeValue}${shortDurationUnitName[unit]}`,
      l: () => pluralize(wholeValue, durationUnitName[unit]),
      digitalClock: () => padWithZero(wholeValue),
    })

    result.push(value)
  })

  return result.join(kind === 'digitalClock' ? ':' : ' ')
}
