import { useQuery } from '@tanstack/react-query'

import {
  getAssetPrice,
  GetAssetPriceInput,
} from '../../chain/price/utils/getAssetPrice'

export const useAssetPriceQuery = (input: GetAssetPriceInput) => {
  return useQuery({
    queryKey: ['asset-price', input],
    queryFn: () => getAssetPrice(input),
  })
}
