import { ReactNode } from 'react'
import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../props'
import { handleWithStopPropagation } from '../shared/events'
import { VStack } from '../layout/Stack'
import { ReversedTheme } from '../theme/ReversedTheme'
import { getColor } from '../theme/getters'
import { borderRadius } from '../css/borderRadius'
import { Text } from '../text'

interface TreeFilterNodeProps extends ComponentWithChildrenProps {
  name: ReactNode
  onSelect: () => void
  isSelected: boolean
}

const Container = styled.div<{ isSelected: boolean }>`
  ${borderRadius.m}
  padding: 8px;
  cursor: pointer;
  border: 1px solid ${getColor('mist')};
  background: ${({ isSelected, theme }) =>
    isSelected
      ? theme.colors.background.toCssValue()
      : theme.colors.mist.toCssValue()};

  color: ${getColor('text')};
`

export const TreeFilterNode = ({
  children,
  name,
  onSelect,
  isSelected,
}: TreeFilterNodeProps) => {
  const content = (
    <Container
      isSelected={isSelected}
      onClick={handleWithStopPropagation(onSelect)}
    >
      <VStack alignItems="center" gap={16}>
        <Text weight="semibold">{name}</Text>
        {children}
      </VStack>
    </Container>
  )

  if (isSelected) {
    return <ReversedTheme>{content}</ReversedTheme>
  }

  return content
}
