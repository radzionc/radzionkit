import { Text } from '@reactkit/ui/ui/Text'
import { ProductIcon } from './ProductIcon'
import { HStack } from '@reactkit/ui/ui/Stack'
import styled from 'styled-components'
import { getColor } from '@reactkit/ui/ui/theme/getters'
import { centerContentCSS } from '@reactkit/ui/ui/utils/centerContentCSS'

const IconWrapper = styled.div`
  color: ${getColor('contrast')};
  font-size: 22px;
  ${centerContentCSS};
`

export const ProductLogo = () => {
  return (
    <HStack alignItems="center" gap={8}>
      <IconWrapper>
        <ProductIcon />
      </IconWrapper>
      <Text size={16} color="contrast" weight="semibold">
        React
        <Text as="span" color="contrast">
          Kit
        </Text>
      </Text>
    </HStack>
  )
}
