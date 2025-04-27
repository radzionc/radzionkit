import { useQuery } from '@tanstack/react-query'

import { getAssetPriceCandles } from '../../chain/trading/getAssetPriceCandles'
import { GetAssetPriceCandlesInput } from '../../chain/trading/getAssetPriceCandles'

export const useAssetPriceCandlesQuery = (input: GetAssetPriceCandlesInput) => {
  return useQuery({
    queryKey: ['asset-price-candles', input],
    queryFn: () => getAssetPriceCandles(input),
  })
}
