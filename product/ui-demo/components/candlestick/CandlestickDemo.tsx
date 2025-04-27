import { useAssetPriceCandlesQuery } from '@lib/chain-ui/queries/useAssetPriceCandlesQuery'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'

import { CandlestickChart } from './chart/CandlestickChart'

export const CandlestickDemo = () => {
  const query = useAssetPriceCandlesQuery({
    id: 'BTC',
    limit: 24,
    candleDuration: { value: 1, unit: 'w' },
  })

  return (
    <MatchQuery
      value={query}
      success={(value) => <CandlestickChart value={value} />}
      error={() => <div>Failed to fetch data</div>}
      pending={() => <div>Loading...</div>}
    />
  )
}
