import { millisecondsInMinute, secondsInMinute } from "date-fns";
import { pluralize } from "./pluralize";

type DurationUnit = "ms" | "min";

const unitsInMinute: Record<DurationUnit, number> = {
  ms: millisecondsInMinute,
  min: 1,
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
