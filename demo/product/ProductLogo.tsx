import { Text } from '@radzionkit/ui/text'
import { ProductIcon } from './ProductIcon'
import { HStack } from '@radzionkit/ui/layout/Stack'
import styled from 'styled-components'
import { getColor } from '@radzionkit/ui/theme/getters'
import { centerContent } from '@radzionkit/ui/css/centerContent'

const IconWrapper = styled.div`
  color: ${getColor('contrast')};
  font-size: 22px;
  ${centerContent};
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
