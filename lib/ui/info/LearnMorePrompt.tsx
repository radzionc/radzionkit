import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { round } from '@lib/ui/css/round'
import { hStack } from '@lib/ui/css/stack'
import { InfoIcon } from '@lib/ui/icons/InfoIcon'
import { AsElementComponent } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { ComponentProps } from 'react'
import styled from 'styled-components'

const Container = styled(UnstyledButton)`
  ${round};
  background: ${getColor('mist')};
  color: ${getColor('text')};
  font-weight: 500;
  height: 40px;
  ${horizontalPadding(16)};
  padding-left: 11px;
  font-size: 14px;

  border: 1px solid ${getColor('mist')};

  svg {
    font-size: 18px;
    color: ${getColor('contrast')};
  }

  ${hStack({
    alignItems: 'center',
    gap: 8,
  })};

  &:hover {
    background: ${getColor('mistExtra')};
  }
`

export const LearnMorePrompt = (
  props: ComponentProps<typeof Container> & AsElementComponent,
) => (
  <Container {...props}>
    <InfoIcon />
    Learn more
  </Container>
)
