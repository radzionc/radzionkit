import { millisecondsInMinute, secondsInMinute } from "date-fns";
import { pluralize } from "./pluralize";
import { S_IN_MIN } from "./time";

type DurationUnit = "ms" | "min" | 's';

const unitsInMinute: Record<DurationUnit, number> = {
  ms: millisecondsInMinute,
  min: 1,
  s: S_IN_MIN,
};

export const formatDuration = (duration: number, unit: DurationUnit) => {
  const minutes = Math.round(duration / unitsInMinute[unit]);

  if (minutes < secondsInMinute) return `${minutes} min`;

  const hours = Math.floor(minutes / secondsInMinute);
  const minutesPart = Math.round(minutes % secondsInMinute);
  if (!minutesPart) {
    return pluralize(hours, "hour");
  }
  return `${hours} h ${minutesPart} m`;
};
