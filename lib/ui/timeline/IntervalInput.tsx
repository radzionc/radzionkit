import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { HSLA } from '../colors/HSLA'

import { enforceRange } from '@lib/utils/enforceRange'
import { getIntervalDuration } from '@lib/utils/interval/getIntervalDuration'
import { MS_IN_HOUR, MS_IN_MIN } from '@lib/utils/time'
import { MoveIcon } from '../icons/MoveIcon'
import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { TimeSpace } from './TimeSpace'
import { Interval } from '@lib/utils/interval/Interval'
import { IntervalEditorControl } from './IntervalEditorControl'
import { InteractiveBoundaryArea } from './InteractiveBoundaryArea'
import { FloatingIntervalDuration } from './FloatingIntervalDuration'
import { InteractiveDragArea } from './InteractiveDragArea'
import { CurrentIntervalRect } from './CurrentIntervalRect'
import { TakeWholeSpace } from '../css/takeWholeSpace'
import { WindowPointerMoveListener } from '../base/WindowPointerMoveListener'

interface RenderContentParams {
  msToPx: (ms: number) => number
}

export interface IntervalInputProps {
  color: HSLA
  value: Interval
  onChange: (value: Interval) => void
  timelineStartsAt: number
  timelineEndsAt: number
  minDuration?: number
  renderContent?: (params: RenderContentParams) => ReactNode
  pxInHour?: number
}

const defaultMinDurationInMin = 10

const MoveIconWr = styled.div`
  font-size: 16px;
`

export const IntervalInput = ({
  color,
  value,
  onChange,
  timelineStartsAt,
  timelineEndsAt,
  renderContent,
  pxInHour = 60,
  minDuration = defaultMinDurationInMin * MS_IN_MIN,
}: IntervalInputProps) => {
  const pxInMs = pxInHour / MS_IN_HOUR
  const msToPx = useCallback((ms: number) => ms * pxInMs, [pxInMs])
  const pxToMs = useCallback((px: number) => px / pxInMs, [pxInMs])

  const [activeControl, setActiveControl] =
    useState<IntervalEditorControl | null>(null)

  const deactivate = useCallback(() => setActiveControl(null), [])

  const containerElement = useRef<HTMLDivElement | null>(null)
  const intervalElement = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    intervalElement.current?.scrollIntoView({
      block: 'nearest',
      inline: 'start',
    })
  }, [value])

  const valueDuration = getIntervalDuration(value)

  const onMove = useCallback(
    ({ clientY }: PointerEvent) => {
      if (!activeControl) return

      const containerRect = containerElement?.current?.getBoundingClientRect()
      if (!containerRect) return

      const timestamp = timelineStartsAt + pxToMs(clientY - containerRect.top)

      const getNewInterval = () => {
        if (activeControl === 'position') {
          const halfDuration = valueDuration / 2
          const oldCenter = value.start + halfDuration

          const newCenter = enforceRange(
            timestamp,
            timelineStartsAt + halfDuration,
            timelineEndsAt - halfDuration,
          )

          const offset = newCenter - oldCenter

          return {
            start: value.start + offset,
            end: value.end + offset,
          }
        } else {
          return {
            start:
              activeControl === 'start'
                ? enforceRange(
                    timestamp,
                    timelineStartsAt,
                    value.end - minDuration,
                  )
                : value.start,
            end:
              activeControl === 'end'
                ? enforceRange(
                    timestamp,
                    value.start + minDuration,
                    timelineEndsAt,
                  )
                : value.end,
          }
        }
      }

      onChange(getNewInterval())
    },
    [
      activeControl,
      minDuration,
      onChange,
      pxToMs,
      timelineEndsAt,
      timelineStartsAt,
      value.end,
      value.start,
      valueDuration,
    ],
  )

  const cursor = useMemo(() => {
    if (!activeControl) return undefined

    if (activeControl === 'position') return 'grabbing'

    return 'row-resize'
  }, [activeControl])

  const intervalStartInPx = msToPx(value.start - timelineStartsAt)
  const intervalEndInPx = msToPx(value.end - timelineStartsAt)
  const intervalDurationInPx = msToPx(valueDuration)

  return (
    <TimeSpace
      msToPx={msToPx}
      startsAt={timelineStartsAt}
      endsAt={timelineEndsAt}
    >
      <WindowPointerMoveListener onMove={onMove} onStop={deactivate} />
      <TakeWholeSpace ref={containerElement} style={{ cursor }}>
        {renderContent && renderContent({ msToPx })}
        <CurrentIntervalRect
          $color={color}
          ref={intervalElement}
          style={{
            top: intervalStartInPx,
            height: intervalDurationInPx,
          }}
        >
          <MoveIconWr style={{ opacity: activeControl ? 0 : 1 }}>
            <MoveIcon />
          </MoveIconWr>
        </CurrentIntervalRect>

        <FloatingIntervalDuration
          style={{
            top: intervalEndInPx + 2,
          }}
          value={value}
        />

        {!activeControl && (
          <>
            <InteractiveDragArea
              style={{
                top: intervalStartInPx,
                height: intervalDurationInPx,
              }}
              onPointerDown={() => setActiveControl('position')}
            />

            <PositionAbsolutelyCenterHorizontally
              fullWidth
              top={intervalStartInPx}
            >
              <InteractiveBoundaryArea
                onPointerDown={() => setActiveControl('start')}
              />
            </PositionAbsolutelyCenterHorizontally>

            <PositionAbsolutelyCenterHorizontally
              fullWidth
              top={intervalEndInPx}
            >
              <InteractiveBoundaryArea
                onPointerDown={() => setActiveControl('end')}
              />
            </PositionAbsolutelyCenterHorizontally>
          </>
        )}
      </TakeWholeSpace>
    </TimeSpace>
  )
}
