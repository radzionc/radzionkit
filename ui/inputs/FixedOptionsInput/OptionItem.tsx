import styled from 'styled-components'
import { transition } from '../../css/transition'
import { horizontalPadding } from '../../css/horizontalPadding'
import { textInputPadding } from '../../css/textInput'
import { verticalPadding } from '../../css/verticalPadding'
import { getColor } from '../../theme/getters'
import { ComponentProps, forwardRef, useId } from 'react'
import { interactive } from '../../css/interactive'

export const Container = styled.div`
  width: 100%;
  ${transition};
  ${interactive};

  ${horizontalPadding(textInputPadding)};
  ${verticalPadding(8)}
  &[aria-selected='true'] {
    background: ${getColor('mist')};
  }
`

export const FixedOptionsInputItem = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof Container>
>(({ children, active, ...rest }, ref) => {
  const id = useId()

  return (
    <Container ref={ref} role="option" id={id} aria-selected={active} {...rest}>
      {children}
    </Container>
  )
})
