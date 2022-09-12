import { useRhythmicRerender } from "ui/hooks/useRhythmicRerender";
import { intervalToDuration } from "date-fns";
import { HStack, VStack } from "ui/Stack";
import { CountdownPart } from "./CountdownPart";
import { Text } from "ui/Text";
import { capitalizeFirstLetter } from "shared/utils/capitalizeFirstLetter";

const countdownPrecisions = ["days", "hours", "minutes", "seconds"] as const;

type CountdownPrecision = typeof countdownPrecisions[number];

interface Props {
  endsAt: number;
  precision?: CountdownPrecision;
}

export const Countdown = ({ endsAt, precision = "seconds" }: Props) => {
  useRhythmicRerender();

  const now = Date.now();

  const duration = intervalToDuration({
    start: Math.min(now, endsAt),
    end: endsAt,
  });

  const precisionsToShow = countdownPrecisions.filter(
    (countdownPrecision) => countdownPrecision <= precision
  );

  return (
    <HStack gap={24}>
      {precisionsToShow.map((period) => {
        return (
          <VStack alignItems="center" key={period} gap={16}>
            <CountdownPart value={duration[period] || 0} />
            <Text size={14}>{capitalizeFirstLetter(period)}</Text>
          </VStack>
        );
      })}
    </HStack>
  );
};
