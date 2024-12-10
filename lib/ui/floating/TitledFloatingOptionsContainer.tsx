import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { FloatingOptionsContainer } from './FloatingOptionsContainer'
import { ComponentProps } from 'react'
import { TitledComponentProps } from '@lib/ui/props'
import { horizontalPadding } from '../css/horizontalPadding'
import { Text } from '../text'
import { VStack } from '@lib/ui/css/stack'

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

const Content = styled(VStack)`
  overflow-y: auto;
`

type TitledFloatingOptionsContainerProps = Omit<
  ComponentProps<typeof Container>,
  'title'
> &
  TitledComponentProps

export function TitledFloatingOptionsContainer({
  title,
  children,
  ...rest
}: TitledFloatingOptionsContainerProps) {
  return (
    <Container {...rest}>
      <Header as="div">{title}</Header>
      <Content>{children}</Content>
    </Container>
  )
}
