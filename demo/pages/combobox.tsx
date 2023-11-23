import { CountryCode } from '@reactkit/utils/countries'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'
import { useState } from 'react'
import { CountryInput } from '@reactkit/ui/inputs/CountryInput'
import styled from 'styled-components'
import { VStack } from '@reactkit/ui/layout/Stack'
import { Asset } from '@reactkit/entities/Asset'
import { AssetInput } from '@reactkit/ui/web3/AssetInput'

const Container = styled(VStack)`
  gap: 20px;
  max-width: 360px;
  min-width: 320px;
  width: 100%;
`

const assets: Asset[] = [
  {
    id: 'BTC',
    name: 'Bitcoin',
    icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
  },
  {
    id: 'ETH',
    name: 'Ethereum',
    icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  },
  {
    id: 'USDT',
    name: 'Tether',
    icon: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
  },
  {
    id: 'ADA',
    name: 'Cardano',
    icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png',
  },
  {
    id: 'BNB',
    name: 'Binance Coin',
    icon: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png',
  },
]

export default makeDemoPage(() => {
  const [country, setCountry] = useState<CountryCode | null>('PT')
  const [asset, setAsset] = useState<Asset | null>(null)

  return (
    <DemoPage title="Combobox">
      <Container>
        <CountryInput
          label="Country of residence"
          value={country}
          onChange={setCountry}
        />
        <AssetInput
          label="Crypto asset"
          value={asset}
          onChange={setAsset}
          options={assets}
        />
      </Container>
    </DemoPage>
  )
})
