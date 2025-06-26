import { useAssetPriceCandlesQuery } from '@lib/chain-ui/queries/useAssetPriceCandlesQuery'
import { MatchQuery } from '@lib/ui/query/components/MatchQuery'
import { Text } from '@lib/ui/text'
import { getErrorMessage } from '@lib/utils/getErrorMessage'

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
      error={(error) => (
        <Text>Failed to fetch data: {getErrorMessage(error)}</Text>
      )}
      loading={() => <Text>Loading...</Text>}
    />
  )
}
