import styled from 'styled-components'
import { borderRadius } from '../css/borderRadius'
import { IconWrapper } from '../icons/IconWrapper'
import { HStack, VStack } from '@lib/ui/css/stack'
import { ChildrenProp, UiProps } from '../props'
import { getColor } from '../theme/getters'
import { verticalPadding } from '../css/verticalPadding'
import { toSizeUnit } from '../css/toSizeUnit'
import { panelDefaultPadding } from '@lib/ui/css/panel'
import { Button } from '../buttons/Button'

const Container = styled.div`
  ${borderRadius.s};
  background: ${getColor('mist')};
  padding: ${toSizeUnit(panelDefaultPadding)};
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
`

const IconContainer = styled(IconWrapper)`
  color: ${getColor('textSupporting')};
  font-size: 18px;
  ${verticalPadding(2)};
`

type EducationBlockProps = ChildrenProp &
  UiProps & {
    onSubmit: () => void
  }

export const EducationBlock = ({
  children,
  onSubmit,
  ...rest
}: EducationBlockProps) => {
  return (
    <Container {...rest}>
      <VStack gap={16}>
        <HStack fullWidth gap={16}>
          <IconContainer>💡</IconContainer>
          {children}
        </HStack>
        <Button style={{ alignSelf: 'end' }} onClick={onSubmit} kind="reversed">
          Got it
        </Button>
      </VStack>
    </Container>
  )
}
