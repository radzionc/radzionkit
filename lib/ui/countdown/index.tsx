import { HStack, VStack } from '@lib/ui/css/stack'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { MS_IN_HOUR, MS_IN_MIN, MS_IN_SEC } from '@lib/utils/time'

import { useRhythmicRerender } from '../hooks/useRhythmicRerender'
import { Text } from '../text'

import { CountdownPart } from './CountdownPart'

const countdownUnits = ['days', 'hours', 'minutes', 'seconds'] as const
type CountdownUnit = (typeof countdownUnits)[number]
const msInUnit: Record<CountdownUnit, number> = {
  days: MS_IN_HOUR * 24,
  hours: MS_IN_HOUR,
  minutes: MS_IN_MIN,
  seconds: MS_IN_SEC,
}

interface Props {
  endsAt: number
  precision?: CountdownUnit
}

const formatDuration = (durationInMs: number, units: CountdownUnit[]) => {
  const duration = {} as Record<CountdownUnit, number>

  units.reduce((msLeft, unit, index) => {
    const msInCurrentUnit = msInUnit[unit]
    const isLast = index === units.length - 1
    const roundFunction = isLast ? Math.round : Math.floor
    const period = roundFunction(msLeft / msInCurrentUnit)
    duration[unit] = period

    return msLeft - period * msInCurrentUnit
  }, durationInMs)

  return duration
}

export const Countdown = ({ endsAt, precision = 'seconds' }: Props) => {
  useRhythmicRerender()

  const now = Date.now()

  const unitsToShow = countdownUnits.slice(
    0,
    countdownUnits.indexOf(precision) + 1,
  )

  const duration = formatDuration(Math.max(endsAt - now, 0), unitsToShow)

  return (
    <HStack gap={24}>
      {unitsToShow.map((unit) => {
        return (
          <VStack alignItems="center" key={precision} gap={16}>
            <CountdownPart value={duration[unit] || 0} />
            <Text size={14}>{capitalizeFirstLetter(unit)}</Text>
          </VStack>
        )
      })}
    </HStack>
  )
}
