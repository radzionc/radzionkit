import { useMemo } from 'react'
import { InputProps } from '../props'
import { HStack } from '../layout/Stack'
import { ExpandableSelector } from '../select/ExpandableSelector'
import { Day, fromDay, toDay } from '@lib/utils/time/Day'
import { range } from '@lib/utils/array/range'
import { monthNames } from '@lib/utils/time/Month'

type DayInputProps = InputProps<Day> & {
  min: Day
  max: Day
}

type DayInputShape = {
  day: number
  month: number
  year: number
}

const toDayInputShape = (timestamp: number): DayInputShape => {
  const date = new Date(timestamp)
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }
}

const fromDayInputShape = ({ day, month, year }: DayInputShape): number =>
  new Date(year, month, day).getTime()

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate()
}

export const DayInput = ({ value, onChange, min, max }: DayInputProps) => {
  const { day, month, year } = useMemo(
    () => toDayInputShape(fromDay(value)),
    [value],
  )

  const yearOptions = useMemo(() => {
    const { year: minYear } = toDayInputShape(fromDay(min))
    const { year: maxYear } = toDayInputShape(fromDay(max))
    return range(maxYear - minYear + 1).map((index) => minYear + index)
  }, [min, max])

  const monthOptions = useMemo(() => {
    const { year: minYear, month: minMonth } = toDayInputShape(fromDay(min))
    const { year: maxYear, month: maxMonth } = toDayInputShape(fromDay(max))

    if (year === minYear && year === maxYear) {
      return range(maxMonth - minMonth + 1).map((index) => minMonth + index)
    }
    if (year === minYear) {
      return range(12 - minMonth).map((index) => minMonth + index)
    }
    if (year === maxYear) {
      return range(maxMonth + 1).map((index) => index)
    }
    return range(12).map((index) => index)
  }, [year, min, max])

  const dayOptions = useMemo(() => {
    const {
      year: minYear,
      month: minMonth,
      day: minDay,
    } = toDayInputShape(fromDay(min))
    const {
      year: maxYear,
      month: maxMonth,
      day: maxDay,
    } = toDayInputShape(fromDay(max))

    if (
      year === minYear &&
      month === minMonth &&
      year === maxYear &&
      month === maxMonth
    ) {
      return range(maxDay - minDay + 1).map((index) => minDay + index)
    }
    if (year === minYear && month === minMonth) {
      const daysInMonth = getDaysInMonth(year, month)
      return range(daysInMonth - minDay + 1).map((index) => minDay + index)
    }
    if (year === maxYear && month === maxMonth) {
      return range(maxDay).map((index) => index + 1)
    }
    return range(getDaysInMonth(year, month)).map((index) => index + 1)
  }, [year, month, min, max])

  return (
    <HStack alignItems="center" gap={8}>
      <ExpandableSelector
        style={{ minWidth: 80 }}
        value={year}
        onChange={(newYear) =>
          onChange(toDay(fromDayInputShape({ day, month, year: newYear })))
        }
        options={yearOptions}
        renderOption={(year) => year.toString()}
        getOptionKey={(year) => year.toString()}
      />
      <ExpandableSelector
        style={{ minWidth: 120 }}
        value={month}
        onChange={(newMonth) =>
          onChange(toDay(fromDayInputShape({ day, month: newMonth, year })))
        }
        options={monthOptions}
        renderOption={(month) => monthNames[month]}
        getOptionKey={(month) => month.toString()}
      />
      <ExpandableSelector
        style={{ minWidth: 68 }}
        value={day}
        onChange={(newDay) =>
          onChange(toDay(fromDayInputShape({ day: newDay, month, year })))
        }
        options={dayOptions}
        renderOption={(day) => day.toString()}
        getOptionKey={(day) => day.toString()}
      />
    </HStack>
  )
}
