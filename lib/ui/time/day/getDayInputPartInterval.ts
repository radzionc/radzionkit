import { Day, fromDay } from '@lib/utils/time/Day'
import {
  DayInputPart,
  dayInputParts,
  DayInputParts,
  toDayInputParts,
} from './DayInputParts'
import { Interval } from '@lib/utils/interval/Interval'
import { MONTHS_IN_YEAR } from '@lib/utils/time'
import { getDaysInMonth } from '@lib/utils/time/getDaysInMonth'

type Input = {
  min: Day
  max: Day
  part: DayInputPart
  value: DayInputParts
}

export const getDayInputPartRange = ({
  min,
  max,
  part,
  value,
}: Input): Interval => {
  const minParts = toDayInputParts(fromDay(min))
  const maxParts = toDayInputParts(fromDay(max))

  const higherParts = dayInputParts.slice(dayInputParts.indexOf(part) + 1)
  const areHigherPartsFixed = higherParts.every(
    (part) => value[part] === minParts[part] && value[part] === maxParts[part],
  )

  if (areHigherPartsFixed) {
    return {
      start: minParts[part],
      end: maxParts[part],
    }
  }

  if (part === 'month') {
    if (value.year === minParts.year) {
      return {
        start: minParts[part],
        end: MONTHS_IN_YEAR,
      }
    }

    if (value.year === maxParts.year) {
      return {
        start: 1,
        end: maxParts[part],
      }
    }

    return {
      start: 1,
      end: MONTHS_IN_YEAR,
    }
  }

  if (value.year === minParts.year && value.month === minParts.month) {
    return {
      start: minParts[part],
      end: getDaysInMonth({
        year: value.year,
        monthIndex: value.month - 1,
      }),
    }
  }

  if (value.year === maxParts.year && value.month === maxParts.month) {
    return {
      start: 1,
      end: maxParts[part],
    }
  }

  return {
    start: 1,
    end: getDaysInMonth({
      year: value.year,
      monthIndex: value.month - 1,
    }),
  }
}
