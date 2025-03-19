import { DurationUnit } from './DurationUnit'
type FormatDurationKind = 's' | 'm' | 'l' | 'digitalClock'
interface FormatDurationOptions {
  maxUnit?: DurationUnit
  minUnit?: DurationUnit
  kind?: FormatDurationKind
}
export declare const formatDuration: (
  duration: number,
  durationUnit: DurationUnit,
  options?: FormatDurationOptions,
) => string
export {}
