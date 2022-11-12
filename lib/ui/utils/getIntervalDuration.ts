import { Interval } from 'shared/entities/Interval'

export const getIntervalDuration = ({ start, end }: Interval) => end - start
