import type { NextPage } from 'next'
import { Fragment } from 'react'
import styled from 'styled-components'
import { HStack } from '@reactkit/ui/ui/Stack'
import { TableLayout } from '@reactkit/ui/ui/TableLayout'
import { Text } from '@reactkit/ui/ui/Text'
import { getSameDimensionsCSS } from '@reactkit/ui/ui/utils/getSameDimensionsCSS'
import { DemoPage } from 'components/DemoPage'
import { Navigation } from 'navigation'

interface Token {
  symbolImageUrl: string
  symbol: string
  name: string
  price: number
}

const tokens: Token[] = [
  {
    symbolImageUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 23076.62,
  },
  {
    symbolImageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 1697.23,
  },
  {
    symbolImageUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.svg',
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.51,
  },
]

const TokenIcon = styled.img`
  ${getSameDimensionsCSS(24)}
`

const GridTablePage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="oVnpdHiI30E" title="CSS Grid Table">
        <TableLayout
          gridTemplateColumns="minmax(auto, 120px) auto 1fr"
          columnNames={['Token name', 'Symbol', 'Price']}
        >
          {tokens.map(({ symbolImageUrl, symbol, name, price }) => (
            <Fragment key={symbol}>
              <HStack alignItems="center" gap={8}>
                <TokenIcon src={symbolImageUrl} />
                <Text cropped>{name}</Text>
              </HStack>
              <Text color="supporting">{symbol}</Text>
              <Text color="supporting">${price}</Text>
            </Fragment>
          ))}
        </TableLayout>
      </DemoPage>
    </Navigation>
  )
}

export default GridTablePage
