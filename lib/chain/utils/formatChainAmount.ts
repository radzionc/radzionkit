import { AssetInfo } from '@lib/chain/types/AssetInfo'
import { formatAmount } from '@lib/utils/formatAmount'

import { fromChainAmount } from './fromChainAmount'

export const formatChainAmount = (
  amount: number | bigint,
  { decimals, symbol }: Pick<AssetInfo, 'decimals' | 'symbol'>,
): string => {
  return `${formatAmount(fromChainAmount(amount, decimals))} ${symbol}`
}
