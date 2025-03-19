export declare const intervalBoundaries: readonly ['start', 'end']
export type IntervalBoundary = (typeof intervalBoundaries)[number]
export type Interval = Record<IntervalBoundary, number>
