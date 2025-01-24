import { AssetInfo } from '@lib/chain/types/AssetInfo'
import { fromChainAmount } from './fromChainAmount'
import { formatAmount } from '@lib/utils/formatAmount'

export const formatChainAmount = (
  amount: number | bigint,
  { decimals, symbol }: Pick<AssetInfo, 'decimals' | 'symbol'>,
): string => {
  return `${formatAmount(fromChainAmount(amount, decimals))} ${symbol}`
}
