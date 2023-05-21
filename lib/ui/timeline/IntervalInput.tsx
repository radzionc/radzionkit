import { millisecondsInHour, millisecondsInMinute } from "date-fns";
import { Interval } from "lib/entities/Interval";
import { enforceRange } from "lib/shared/utils/enforceRange";
import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useEvent } from "react-use";
import styled, { css } from "styled-components";
import { HSLA } from "../colors/HSLA";
import { MoveIcon } from "../icons/MoveIcon";
import { Text } from "../Text";
import { centerContentCSS } from "../utils/centerContentCSS";
import { getIntervalDuration } from "../utils/getIntervalDuration";
import { getVerticalMarginCSS } from "../utils/getVerticalMarginCSS";
import { HourSpace } from "./HourSpace";

import { InteractiveBoundaryArea } from "./InteractiveBoundaryArea";
import { IntervalRect } from "./IntervalRect";
import { MaxIntervalEndBoundary } from "./MaxIntervalEndBoundary";
import { formatDuration } from "lib/shared/utils/formatDuration";

interface RenderContentParams {
  pxInMs: number;
}

export interface IntervalInputProps {
  color: HSLA;
  value: Interval;
  onChange: (value: Interval) => void;
  startOfDay: number;
  startHour: number;
  endHour: number;
  maxIntervalEnd?: number;
  minDuration?: number;
  renderContent?: (params: RenderContentParams) => ReactNode;
}

const pxInHour = 60;
const defaultMinDurationInMin = 10;

const Container = styled.div`
  ${getVerticalMarginCSS(8)}
  user-select: none;
`;

type IntervalEditorControl = "start" | "end" | "position";

const MoveIconWr = styled.div`
  font-size: 16px;
`;

const CurrentIntervalRect = styled(IntervalRect)`
  ${centerContentCSS}

  ${({ $color }) => css`
    background: ${$color.getVariant({ a: () => 0.12 }).toCssValue()};
    border: 2px solid ${$color.toCssValue()};
    color: ${$color.toCssValue()};
  `}
`;

const InteractiveDragArea = styled.div`
  position: absolute;
  width: 100%;
  cursor: grab;
`;

const DurationText = styled(Text)`
  position: absolute;
  width: 100%;
  text-align: center;
  transition: none;
`;

export const IntervalInput = ({
  color,
  value,
  onChange,
  startOfDay,
  endHour,
  startHour,
  renderContent,
  minDuration = defaultMinDurationInMin * millisecondsInMinute,
  maxIntervalEnd: optionalMaxIntervalEnd,
}: IntervalInputProps) => {
  const hoursCount = endHour - startHour;

  const maxIntervalEnd =
    optionalMaxIntervalEnd ?? startOfDay + millisecondsInHour * endHour;

  const minIntervalStart = startOfDay + millisecondsInHour * startHour;
  const timelineStart = minIntervalStart;

  const height = hoursCount * pxInHour;
  const pxInMs = height / (hoursCount * millisecondsInHour);

  const [activeControl, setActiveControl] =
    useState<IntervalEditorControl | null>(null);

  useEvent("mouseup", () => setActiveControl(null));

  const containerElement = useRef<HTMLDivElement | null>(null);
  const intervalElement = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    intervalElement.current?.scrollIntoView();
  }, [intervalElement]);

  const valueDuration = getIntervalDuration(value);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({ clientY }) => {
    if (!activeControl) return;

    const containerRect = containerElement?.current?.getBoundingClientRect();
    if (!containerRect) return;

    const y =
      enforceRange(clientY, containerRect.top, containerRect.bottom) -
      containerRect.top;

    const getNewInterval = () => {
      if (activeControl === "position") {
        const oldCenter =
          (value.start + valueDuration / 2 - timelineStart) * pxInMs;

        const offset = y - oldCenter;
        const msOffset = enforceRange(
          offset / pxInMs,
          minIntervalStart - value.start,
          maxIntervalEnd - value.end
        );

        return {
          start: value.start + msOffset,
          end: value.end + msOffset,
        };
      } else {
        const timestamp = timelineStart + y / pxInMs;

        return {
          start:
            activeControl === "start"
              ? Math.max(
                Math.min(timestamp, value.end - minDuration),
                minIntervalStart
              )
              : value.start,
          end:
            activeControl === "end"
              ? Math.min(
                Math.max(timestamp, value.start + minDuration),
                maxIntervalEnd
              )
              : value.end,
        };
      }
    };

    onChange(getNewInterval());
  };

  const cursor = useMemo(() => {
    if (!activeControl) return undefined;

    if (activeControl === "position") return "grabbing";

    return "row-resize";
  }, [activeControl]);

  const intervalStartInPx = pxInMs * (value.start - timelineStart);
  const intervalEndInPx = pxInMs * (value.end - timelineStart);
  const intervalDurationInPx = pxInMs * valueDuration;

  return (
    <Container
      ref={containerElement}
      style={{ height: height, cursor }}
      onMouseMove={handleMouseMove}
    >
      <HourSpace
        formatHour={(hour) => {
          const date = new Date(startOfDay + hour * millisecondsInHour);
          return date.toLocaleString(undefined, { hour: "numeric" });
        }}
        start={startHour}
        end={endHour}
        hourLabelWidthInPx={20}
      >
        {renderContent && renderContent({ pxInMs })}
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
          {formatDuration(valueDuration, "ms")}
        </DurationText>

        {optionalMaxIntervalEnd && (
          <MaxIntervalEndBoundary
            timestamp={optionalMaxIntervalEnd}
            y={pxInMs * (optionalMaxIntervalEnd - timelineStart)}
            isActive={!!activeControl}
          />
        )}

        {!activeControl && (
          <>
            <InteractiveDragArea
              style={{
                top: intervalStartInPx,
                height: intervalDurationInPx,
              }}
              onMouseDown={() => setActiveControl("position")}
            />

            <InteractiveBoundaryArea
              y={intervalStartInPx}
              onMouseDown={() => setActiveControl("start")}
            />

            <InteractiveBoundaryArea
              y={intervalEndInPx}
              onMouseDown={() => setActiveControl("end")}
            />
          </>
        )}
      </HourSpace>
    </Container>
  );
};
