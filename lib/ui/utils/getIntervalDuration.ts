import { Interval } from 'lib/entities/Interval'

export const getIntervalDuration = ({ start, end }: Interval) => end - start
