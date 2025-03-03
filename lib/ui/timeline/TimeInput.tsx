import { HStack } from '@lib/ui/css/stack'
import { enforceRange } from '@lib/utils/enforceRange'
import { MS_IN_HOUR, MS_IN_MIN } from '@lib/utils/time'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { MouseEventHandler, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { HSLA } from '../colors/HSLA'
import { useBoolean } from '../hooks/useBoolean'
import { useEvent } from '../hooks/useEvent'
import { Text } from '../text'

import { BoundaryInteractiveArea } from './BoundaryInteractiveArea'
import { EditorActiveSession } from './EditorActiveSession'
import { TimeSpace } from './TimeSpace'

export interface TimeInputProps {
  color: HSLA
  value: number
  onChange: (value: number) => void
  timelineStartsAt: number
  timelineEndsAt: number

  intialValue: number
}

const pxInHour = 180
const pxInMs = pxInHour / MS_IN_HOUR
const msToPx = (ms: number) => ms * pxInMs

const TimeValue = styled(Text)`
  position: absolute;
  width: 100%;
  font-size: 14px;
  transition: none;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const TimeInput = ({
  color,
  value,
  onChange,
  timelineStartsAt,
  timelineEndsAt,
  intialValue,
}: TimeInputProps) => {
  const timelineDuration = timelineEndsAt - timelineStartsAt

  const height = msToPx(timelineDuration)

  const [isActive, { set: activate, unset: deactivate }] = useBoolean(false)

  useEvent(window, 'mouseup', deactivate)

  const containerElement = useRef<HTMLDivElement | null>(null)
  const timeElement = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    timeElement.current?.scrollIntoView()
  }, [timeElement])

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({ clientY }) => {
    if (!isActive) return

    const containerRect = containerElement?.current?.getBoundingClientRect()
    if (!containerRect) return

    const y =
      enforceRange(clientY, containerRect.top, containerRect.bottom) -
      containerRect.top

    const timestamp = timelineStartsAt + y / pxInMs

    onChange(enforceRange(timestamp, timelineStartsAt, timelineEndsAt))
  }

  const cursor = isActive ? 'row-resize' : undefined

  const valueInPx = msToPx(value - timelineStartsAt)

  const minDiff = Math.round(intialValue - value) / MS_IN_MIN

  return (
    <TimeSpace
      startsAt={timelineStartsAt}
      endsAt={timelineEndsAt}
      msToPx={msToPx}
    >
      <Container
        ref={containerElement}
        style={{ height: height, cursor }}
        onMouseMove={handleMouseMove}
      >
        <EditorActiveSession
          $color={color}
          style={{
            top: msToPx(value - timelineStartsAt),
            height: msToPx(timelineEndsAt - value),
          }}
        />

        <TimeValue
          style={{
            top: valueInPx - 20,
          }}
        >
          <HStack alignItems="center" justifyContent="space-between" gap={8}>
            <Text>
              {new Date(value).toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
            {minDiff !== 0 && (
              <Text as="span" color="supporting">
                {formatDuration(Math.abs(minDiff), 'min')}{' '}
                {minDiff < 0 ? 'later' : 'earlier'}
              </Text>
            )}
          </HStack>
        </TimeValue>
        <BoundaryInteractiveArea
          isActive={isActive}
          top={valueInPx}
          onMouseDown={activate}
        />
      </Container>
    </TimeSpace>
  )
}
