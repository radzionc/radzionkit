import { HStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'
import styled from 'styled-components'
import { round } from '@radzionkit/ui/css/round'
import { getColor } from '@radzionkit/ui/theme/getters'
import { sameDimensions } from '@radzionkit/ui/css/sameDimensions'
import { centerContent } from '@radzionkit/ui/css/centerContent'
import { UnstyledButton } from '@radzionkit/ui/buttons/UnstyledButton'
import { transition } from '@radzionkit/ui/css/transition'
import { InputProps, LabeledComponentProps } from '../props'
import { verticalPadding } from '../css/verticalPadding'

const CheckContainer = styled.div`
  ${round};
  border: 2px solid ${getColor('textShy')};
  ${sameDimensions(20)};
  padding: 1px;
  ${centerContent}
  ${transition};
`

const Container = styled(UnstyledButton)`
  ${transition};
  ${verticalPadding(4)}
  &:hover {
    color: ${getColor('contrast')};
  }

  &:hover ${CheckContainer} {
    background: ${getColor('mist')};
  }
`

const Check = styled.div`
  ${round};
  background: ${getColor('primary')};
  ${sameDimensions('100%')};
  ${centerContent}
`

type MinimalisticToggleProps = InputProps<boolean> & LabeledComponentProps

export const MinimalisticToggle = ({
  value,
  onChange,
  label,
}: MinimalisticToggleProps) => {
  return (
    <Container onClick={() => onChange(!value)}>
      <HStack alignItems="center" gap={8}>
        <CheckContainer>{value && <Check />}</CheckContainer>
        <Text as="div">{label}</Text>
      </HStack>
    </Container>
  )
}
