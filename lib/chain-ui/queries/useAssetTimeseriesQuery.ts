import { useQuery } from '@tanstack/react-query'
import { getAssetTimeseries } from '../../chain/price/utils/getAssetTimeseries'
import { GetAssetTimeseriesInput } from '../../chain/price/utils/getAssetTimeseries'

export const useAssetTimeseriesQuery = (input: GetAssetTimeseriesInput) => {
  return useQuery({
    queryKey: ['asset-timeseries', input],
    queryFn: () => getAssetTimeseries(input),
  })
}
