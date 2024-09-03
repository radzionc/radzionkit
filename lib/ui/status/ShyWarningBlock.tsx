import styled from 'styled-components'
import { borderRadius } from '../css/borderRadius'
import { IconWrapper } from '../icons/IconWrapper'
import { HStack, VStack } from '@lib/ui/css/stack'
import {
  ComponentWithChildrenProps,
  TitledComponentProps,
  UIComponentProps,
} from '../props'
import { getColor } from '../theme/getters'
import { Text } from '../text'
import { TriangleAlertIcon } from '../icons/TriangleAlertIcon'

const Container = styled.div`
  ${borderRadius.s};
  background: ${({ theme }) =>
    theme.colors.idle.getVariant({ a: () => 0.12 }).toCssValue()};
  padding: 20px;
`

const IconContainer = styled(IconWrapper)`
  color: ${getColor('idle')};
`

type ShyWarningBlockProps = ComponentWithChildrenProps &
  TitledComponentProps &
  UIComponentProps

export const ShyWarningBlock = ({
  children,
  title,
  ...rest
}: ShyWarningBlockProps) => {
  return (
    <Container {...rest}>
      <HStack fullWidth gap={16}>
        <IconContainer>
          <TriangleAlertIcon />
        </IconContainer>
        <VStack gap={8}>
          <Text as="div" color="contrast" size={14} weight="600">
            {title}
          </Text>
          <Text as="div" size={14} height="large" color="supporting">
            {children}
          </Text>
        </VStack>
      </HStack>
    </Container>
  )
}
