import { useRhythmicRerender } from "ui/hooks/useRhythmicRerender";
import {
  millisecondsInHour,
  millisecondsInMinute,
  millisecondsInSecond,
} from "date-fns";
import { HStack, VStack } from "ui/Stack";
import { CountdownPart } from "./CountdownPart";
import { Text } from "ui/Text";
import { capitalizeFirstLetter } from "shared/utils/capitalizeFirstLetter";

const countdownUnits = ["days", "hours", "minutes", "seconds"] as const;
type CountdownUnit = typeof countdownUnits[number];
const msInUnit: Record<CountdownUnit, number> = {
  days: millisecondsInHour * 24,
  hours: millisecondsInHour,
  minutes: millisecondsInMinute,
  seconds: millisecondsInSecond,
};

interface Props {
  endsAt: number;
  precision?: CountdownUnit;
}

const formatDuration = (durationInMs: number, units: CountdownUnit[]) => {
  const duration = {} as Record<CountdownUnit, number>;

  units.reduce((msLeft, unit, index) => {
    const msInCurrentUnit = msInUnit[unit];
    const isLast = index === units.length - 1;
    const roundFunction = isLast ? Math.round : Math.floor;
    const period = roundFunction(msLeft / msInCurrentUnit);
    duration[unit] = period;

    return msLeft - period * msInCurrentUnit;
  }, durationInMs);

  return duration;
};

export const Countdown = ({ endsAt, precision = "seconds" }: Props) => {
  useRhythmicRerender();

  const now = Date.now();

  const unitsToShow = countdownUnits.slice(
    0,
    countdownUnits.indexOf(precision) + 1
  );

  const duration = formatDuration(Math.max(endsAt - now, 0), unitsToShow);

  return (
    <HStack gap={24}>
      {unitsToShow.map((unit) => {
        return (
          <VStack alignItems="center" key={precision} gap={16}>
            <CountdownPart value={duration[unit] || 0} />
            <Text size={14}>{capitalizeFirstLetter(unit)}</Text>
          </VStack>
        );
      })}
    </HStack>
  );
};
