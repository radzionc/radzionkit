import { HStack } from '@reactkit/ui/ui/Stack'
import { getVerticalPaddingCSS } from '@reactkit/ui/ui/utils/getVerticalPaddingCSS'
import { ProductLogo } from 'product/ProductLogo'
import styled from 'styled-components'
import { PrimaryActions } from './PrimaryActions'

const Container = styled.div`
  ${getVerticalPaddingCSS(20)};
  display: grid;
  --column-gap: 20px;
  grid-template-columns: 1fr min(1140px, 100% - calc(var(--column-gap) * 2)) 1fr;
  grid-column-gap: var(--column-gap);
  > * {
    grid-column: 2;
  }
`

export const LandingPageHeader = () => {
  return (
    <Container>
      <HStack alignItems="center" justifyContent="space-between">
        <ProductLogo />
        <PrimaryActions />
      </HStack>
    </Container>
  )
}
