import { Milliseconds } from '@lib/utils/time/types'

export type PriceCandle = {
  startTime: Milliseconds
  open: number
  high: number
  low: number
  close: number
}
