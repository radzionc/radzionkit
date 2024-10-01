export const intervalBoundaries = ['start', 'end'] as const
export type IntervalBoundary = (typeof intervalBoundaries)[number]

export type Interval = Record<IntervalBoundary, number>
