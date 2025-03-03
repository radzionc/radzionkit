import { addQueryParams } from '@lib/utils/query/addQueryParams'
import { queryUrl } from '@lib/utils/query/queryUrl'
import { recordMap } from '@lib/utils/record/recordMap'

import { FiatCurrency } from '../FiatCurrency'

type Input = {
  ids: string[]
  fiatCurrency?: FiatCurrency
}

type Response = Record<string, Record<FiatCurrency, number>>

const baseUrl = 'https://api.coingecko.com/api/v3/simple/price'

export const getAssetPrices = async ({ ids, fiatCurrency = 'usd' }: Input) => {
  const url = addQueryParams(baseUrl, {
    ids: ids.join(','),
    vs_currencies: fiatCurrency,
  })

  const result = await queryUrl<Response>(url)

  return recordMap(result, (value) => value[fiatCurrency])
}
