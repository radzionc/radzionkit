import styled from 'styled-components'
import { borderRadius } from '../css/borderRadius'
import { IconWrapper } from '../icons/IconWrapper'
import { InfoIcon } from '../icons/InfoIcon'
import { HStack } from '@lib/ui/css/stack'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'
import { getColor } from '../theme/getters'
import { verticalPadding } from '../css/verticalPadding'

const Container = styled.div`
  ${borderRadius.s};
  background: ${getColor('mist')};
  padding: 20px;
  line-height: 1.5;
  font-size: 14px;
`

const IconContainer = styled(IconWrapper)`
  color: ${getColor('textSupporting')};
  font-size: 18px;
  ${verticalPadding(2)};
`

export const ShyInfoBlock = ({
  children,
  ...rest
}: ComponentWithChildrenProps & UIComponentProps) => {
  return (
    <Container {...rest}>
      <HStack fullWidth gap={16}>
        <IconContainer>
          <InfoIcon />
        </IconContainer>
        {children}
      </HStack>
    </Container>
  )
}
