import { FiatCurrency } from '../FiatCurrency'
import { getAssetPrices } from './getAssetPrices'

type Input = {
  id: string
  fiatCurrency?: FiatCurrency
}

export const getAssetPrice = async ({ id, fiatCurrency }: Input) => {
  const prices = await getAssetPrices({ ids: [id], fiatCurrency })

  return prices[id]
}
