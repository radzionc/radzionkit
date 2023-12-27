import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useEvent } from 'react-use'
import styled, { css } from 'styled-components'
import { HSLA } from '../colors/HSLA'

import { IntervalRect } from './IntervalRect'
import { enforceRange } from '@lib/utils/enforceRange'
import { getIntervalDuration } from '@lib/utils/interval/getIntervalDuration'
import { MS_IN_HOUR, MS_IN_MIN } from '@lib/utils/time'
import { MoveIcon } from '../icons/MoveIcon'
import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { TimeSpace } from './TimeSpace'
import { centerContent } from '../css/centerContent'
import { Text } from '../text'
import { Interval } from '@lib/utils/interval/Interval'
import { formatDuration } from '@lib/utils/time/formatDuration'

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
}

const pxInHour = 60
const pxInMs = pxInHour / MS_IN_HOUR
const msToPx = (ms: number) => ms * pxInMs
const pxToMs = (px: number) => px / pxInMs
const defaultMinDurationInMin = 10

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
`

type IntervalEditorControl = 'start' | 'end' | 'position'

const MoveIconWr = styled.div`
  font-size: 16px;
`

const CurrentIntervalRect = styled(IntervalRect)`
  ${centerContent}

  ${({ $color }) => css`
    background: ${$color.getVariant({ a: () => 0.12 }).toCssValue()};
    border: 2px solid ${$color.toCssValue()};
    color: ${$color.toCssValue()};
  `}
`

export const InteractiveBoundaryArea = styled.div`
  width: 100%;
  cursor: row-resize;
  height: 10px;
`

const InteractiveDragArea = styled.div`
  position: absolute;
  width: 100%;
  cursor: grab;
`

const DurationText = styled(Text)`
  position: absolute;
  width: 100%;
  text-align: center;
  transition: none;
`

export const IntervalInput = ({
  color,
  value,
  onChange,
  timelineStartsAt,
  timelineEndsAt,
  renderContent,
  minDuration = defaultMinDurationInMin * MS_IN_MIN,
}: IntervalInputProps) => {
  const [activeControl, setActiveControl] =
    useState<IntervalEditorControl | null>(null)

  useEvent('mouseup', () => setActiveControl(null))

  const containerElement = useRef<HTMLDivElement | null>(null)
  const intervalElement = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    intervalElement.current?.scrollIntoView()
  }, [intervalElement])

  const valueDuration = getIntervalDuration(value)

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({ clientY }) => {
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
  }

  const cursor = useMemo(() => {
    if (!activeControl) return undefined

    if (activeControl === 'position') return 'grabbing'

    return 'row-resize'
  }, [activeControl])

  const intervalStartInPx = msToPx(value.start - timelineStartsAt)
  const intervalEndInPx = msToPx(value.end - timelineStartsAt)
  const intervalDurationInPx = msToPx(valueDuration)

  return (
    <Wrapper>
      <TimeSpace
        msToPx={msToPx}
        startsAt={timelineStartsAt}
        endsAt={timelineEndsAt}
      >
        <Container
          ref={containerElement}
          style={{ cursor }}
          onMouseMove={handleMouseMove}
        >
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

          <DurationText
            style={{
              top: intervalEndInPx + 2,
            }}
            weight="bold"
          >
            {formatDuration(valueDuration, 'ms')}
          </DurationText>

          {!activeControl && (
            <>
              <InteractiveDragArea
                style={{
                  top: intervalStartInPx,
                  height: intervalDurationInPx,
                }}
                onMouseDown={() => setActiveControl('position')}
              />

              <PositionAbsolutelyCenterHorizontally
                fullWidth
                top={intervalStartInPx}
              >
                <InteractiveBoundaryArea
                  onMouseDown={() => setActiveControl('start')}
                />
              </PositionAbsolutelyCenterHorizontally>

              <PositionAbsolutelyCenterHorizontally
                fullWidth
                top={intervalEndInPx}
              >
                <InteractiveBoundaryArea
                  onMouseDown={() => setActiveControl('end')}
                />
              </PositionAbsolutelyCenterHorizontally>
            </>
          )}
        </Container>
      </TimeSpace>
    </Wrapper>
  )
}
