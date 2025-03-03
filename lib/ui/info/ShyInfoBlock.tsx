import { HStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { verticalPadding } from '../css/verticalPadding'
import { IconWrapper } from '../icons/IconWrapper'
import { InfoIcon } from '../icons/InfoIcon'
import { ChildrenProp, UiProps } from '../props'
import { getColor } from '../theme/getters'

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

export const ShyInfoBlock = ({ children, ...rest }: ChildrenProp & UiProps) => {
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
