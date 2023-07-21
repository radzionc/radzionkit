import { Interval } from '../../entities/Interval'

export const getIntervalDuration = ({ start, end }: Interval) => end - start
