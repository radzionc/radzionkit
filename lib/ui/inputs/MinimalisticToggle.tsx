import { centerContent } from '@lib/ui/css/centerContent'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { HStack } from '@lib/ui/css/stack'
import { transition } from '@lib/ui/css/transition'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'

import { interactive } from '../css/interactive'
import { verticalPadding } from '../css/verticalPadding'
import { IsActiveProp, InputProps, LabelProp, UiProps } from '../props'

import { InvisibleHTMLCheckbox } from './InvisibleHTMLCheckbox'

const CheckContainer = styled.div`
  ${round};
  border: 2px solid ${getColor('textShy')};
  ${sameDimensions(20)};
  padding: 1px;
  ${centerContent}
  ${transition};
`

const Container = styled.label<IsActiveProp>`
  ${transition};
  ${verticalPadding(4)}
  ${interactive};
  position: relative;
  font-size: 14px;
  font-weight: 500;
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${getColor('contrast')};
    `}
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

type MinimalisticToggleProps = InputProps<boolean> & LabelProp & UiProps

export const MinimalisticToggle = ({
  value,
  onChange,
  label,
  ...rest
}: MinimalisticToggleProps) => {
  return (
    <Container isActive={value} {...rest}>
      <HStack fullHeight alignItems="center" gap={8}>
        <CheckContainer>{value && <Check />}</CheckContainer>
        <Text as="div">{label}</Text>
      </HStack>
      <InvisibleHTMLCheckbox value={value} onChange={onChange} />
    </Container>
  )
}
