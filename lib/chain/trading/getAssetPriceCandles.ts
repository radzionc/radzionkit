import { PriceCandle } from '@lib/trading/PriceCandle'
import { order } from '@lib/utils/array/order'
import { addQueryParams } from '@lib/utils/query/addQueryParams'
import { queryUrl } from '@lib/utils/query/queryUrl'
import { withoutUndefinedFields } from '@lib/utils/record/withoutUndefinedFields'

const binanceUnitMap = {
  min: 'm',
  h: 'h',
  d: 'd',
  w: 'w',
}

export type CandleDuration =
  | { value: 1; unit: 'min' }
  | { value: 3; unit: 'min' }
  | { value: 5; unit: 'min' }
  | { value: 15; unit: 'min' }
  | { value: 30; unit: 'min' }
  | { value: 1; unit: 'h' }
  | { value: 2; unit: 'h' }
  | { value: 4; unit: 'h' }
  | { value: 6; unit: 'h' }
  | { value: 8; unit: 'h' }
  | { value: 12; unit: 'h' }
  | { value: 1; unit: 'd' }
  | { value: 3; unit: 'd' }
  | { value: 1; unit: 'w' }

const toBinanceInterval = (duration: CandleDuration): string => {
  const apiUnit = binanceUnitMap[duration.unit]
  if (!apiUnit) {
    throw new Error(`Unsupported duration unit: ${duration.unit}`)
  }

  return `${duration.value}${apiUnit}`
}

export type GetAssetPriceCandlesInput = {
  id: string
  startTime: number
  endTime?: number
  candleDuration: CandleDuration
  limit?: number
}

type KlineData = [
  number, // Open time
  string, // Open price
  string, // High price
  string, // Low price
  string, // Close price
  string, // Volume
  number, // Close time
  string, // Quote asset volume
  number, // Number of trades
  string, // Taker buy base asset volume
  string, // Taker buy quote asset volume
  string, // Ignore
]

const baseUrl = 'https://api.binance.com/api/v3/klines'

export const maxLimit = 1000

export const getAssetPriceCandles = async ({
  id,
  startTime,
  endTime,
  candleDuration,
  limit = maxLimit,
}: GetAssetPriceCandlesInput): Promise<PriceCandle[]> => {
  const symbol = `${id.toUpperCase()}USDT`

  const url = addQueryParams(
    baseUrl,
    withoutUndefinedFields({
      symbol,
      interval: toBinanceInterval(candleDuration),
      startTime,
      endTime,
      limit,
    }),
  )

  const klines = await queryUrl<KlineData[]>(url.toString())

  return order(
    klines.map((kline) => ({
      startTime: kline[0],
      open: parseFloat(kline[1]),
      high: parseFloat(kline[2]),
      low: parseFloat(kline[3]),
      close: parseFloat(kline[4]),
    })),
    (o) => o.startTime,
    'asc',
  )
}
