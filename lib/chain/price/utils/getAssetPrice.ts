import { FiatCurrency } from '../FiatCurrency'

import { getAssetPrices } from './getAssetPrices'

export type GetAssetPriceInput = {
  id: string
  fiatCurrency?: FiatCurrency
}

export const getAssetPrice = async ({
  id,
  fiatCurrency,
}: GetAssetPriceInput) => {
  const prices = await getAssetPrices({ ids: [id], fiatCurrency })

  return prices[id]
}
