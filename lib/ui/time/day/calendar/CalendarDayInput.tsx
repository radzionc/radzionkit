import { VStack } from '@lib/ui/css/stack'
import { range } from '@lib/utils/array/range'
import { isInInterval } from '@lib/utils/interval/isInInterval'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { Day, fromDay, toDay } from '@lib/utils/time/Day'
import {
  getMonthInterval,
  Month,
  monthNames,
  subtractMonths,
  toMonth,
  addMonths,
} from '@lib/utils/time/Month'
import { startOfISOWeek, endOfISOWeek } from 'date-fns'
import { addDays } from 'date-fns'
import { useMemo, useState } from 'react'

import { IconButton } from '../../../buttons/IconButton'
import { ChevronLeftIcon } from '../../../icons/ChevronLeftIcon'
import { ChevronRightIcon } from '../../../icons/ChevronRightIcon'
import { Header } from '../../../layout/Header'
import { SeparatedByLine } from '../../../layout/SeparatedByLine'
import { Text } from '../../../text'

import { CalendarFrame } from './CalendarFrame'
import { DayOption } from './DayOption'
import { WeekdayLabels } from './WeekdayLabels'

type CalendarDayInputProps = {
  value: Day | null
  onChange: (value: Day) => void
  min: Day
  max: Day
}

export const CalendarDayInput = ({
  value,
  onChange,
  min,
  max,
}: CalendarDayInputProps) => {
  const [month, setMonth] = useState<Month>(() =>
    toMonth(value ? fromDay(value) : Date.now()),
  )

  const monthInterval = useMemo(() => getMonthInterval(month), [month])

  const days = useMemo(() => {
    const firstDayStartedAt = startOfISOWeek(monthInterval.start).getTime()
    const lastDayStartedAt = endOfISOWeek(monthInterval.end).getTime()
    const daysCount = Math.round(
      convertDuration(lastDayStartedAt - firstDayStartedAt, 'ms', 'd'),
    )

    return range(daysCount).map((index) =>
      addDays(firstDayStartedAt, index).getTime(),
    )
  }, [monthInterval.end, monthInterval.start])

  return (
    <VStack gap={20}>
      <Header>
        <IconButton
          isDisabled={isInInterval(monthInterval, fromDay(min))}
          icon={<ChevronLeftIcon />}
          title="Back"
          size="l"
          onClick={() => setMonth(subtractMonths(month, 1))}
        />
        <Text color="contrast">
          {monthNames[month.month - 1]} {month.year}
        </Text>
        <IconButton
          icon={<ChevronRightIcon />}
          isDisabled={isInInterval(monthInterval, fromDay(max))}
          onClick={() => setMonth(addMonths(month, 1))}
          title="Forward"
          size="l"
        />
      </Header>
      <SeparatedByLine gap={8}>
        <WeekdayLabels />
        <CalendarFrame>
          {days.map((day) => {
            const monthDay = new Date(day).getDate()
            const isDisabled =
              !isInInterval(monthInterval, day) ||
              !isInInterval({ start: fromDay(min), end: fromDay(max) }, day)

            const isActive = value ? day === fromDay(value) : false

            return (
              <DayOption
                onClick={isDisabled ? undefined : () => onChange(toDay(day))}
                isActive={isActive}
                isDisabled={isDisabled}
                key={day}
              >
                {monthDay}
              </DayOption>
            )
          })}
        </CalendarFrame>
      </SeparatedByLine>
    </VStack>
  )
}
