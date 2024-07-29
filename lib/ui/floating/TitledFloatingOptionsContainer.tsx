import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { FloatingOptionsContainer } from './FloatingOptionsContainer'
import { ComponentProps, forwardRef } from 'react'
import { TitledComponentProps } from '@lib/ui/props'
import { horizontalPadding } from '../css/horizontalPadding'
import { Text } from '../text'

const Container = styled(FloatingOptionsContainer)`
  background: ${getColor('foregroundExtra')};
  overflow: hidden;
  padding: 0;
  gap: 1px;
  min-width: 200px;

  > * {
    background: ${getColor('foreground')};
    padding: 8px;
  }
`

const Header = styled(Text)`
  ${horizontalPadding(12)};
  font-size: 14px;
  color: ${getColor('textSupporting')};
`

type TitledFloatingOptionsContainerProps = ComponentProps<typeof Container> &
  TitledComponentProps

export const TitledFloatingOptionsContainer = forwardRef<
  HTMLDivElement,
  TitledFloatingOptionsContainerProps
>(({ title, children, ...rest }, ref) => (
  <Container ref={ref} {...rest}>
    <Header>{title}</Header>
    {children}
  </Container>
))
