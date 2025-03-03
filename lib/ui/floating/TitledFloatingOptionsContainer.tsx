import { VStack } from '@lib/ui/css/stack'
import { TitleProp } from '@lib/ui/props'
import { ComponentProps } from 'react'
import styled from 'styled-components'

import { horizontalPadding } from '../css/horizontalPadding'
import { Text } from '../text'
import { getColor } from '../theme/getters'

import { FloatingOptionsContainer } from './FloatingOptionsContainer'

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
  TitleProp

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
