import { Milliseconds } from '@lib/utils/time/types'

export const priceCandlePriceFields = ['open', 'high', 'low', 'close'] as const
export type PriceCandlePriceField = (typeof priceCandlePriceFields)[number]
export type PriceCandlePriceFields = Record<PriceCandlePriceField, number>

export type PriceCandle = PriceCandlePriceFields & {
  startTime: Milliseconds
}
