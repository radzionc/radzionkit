import {
  ComponentWithChildrenProps,
  TitledComponentProps,
  UIComponentProps,
} from '@lib/ui/props'
import { VStack } from '@lib/ui/layout/Stack'
import styled from 'styled-components'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { HStack } from '@lib/ui/layout/Stack'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { getColor } from '@lib/ui/theme/getters'
import { Text } from '@lib/ui/text'
import { AlertTriangleIcon } from '../../icons/AlertTriangeIcon'

const Container = styled.div`
  ${borderRadius.s};
  background: ${({ theme }) =>
    theme.colors.idle.getVariant({ a: () => 0.12 }).toCssValue()};
  padding: 20px;
`

const IconContainer = styled(IconWrapper)`
  color: ${getColor('idle')};
`

type FormWarningProps = ComponentWithChildrenProps &
  TitledComponentProps &
  UIComponentProps

export const FormWarning = ({ children, title, ...rest }: FormWarningProps) => {
  return (
    <Container {...rest}>
      <HStack fullWidth gap={16}>
        <IconContainer>
          <AlertTriangleIcon />
        </IconContainer>
        <VStack gap={8}>
          <Text as="div" color="contrast" size={14} weight="bold">
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
