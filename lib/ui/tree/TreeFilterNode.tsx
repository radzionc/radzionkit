import { ReactNode } from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../props'
import { VStack } from '@lib/ui/css/stack'
import { ReversedTheme } from '../theme/ReversedTheme'
import { getColor } from '../theme/getters'
import { borderRadius } from '../css/borderRadius'
import { Text } from '../text'
import { stopPropagation } from '../utils/stopPropagation'

interface TreeFilterNodeProps extends ChildrenProp {
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
    <Container isSelected={isSelected} onClick={stopPropagation(onSelect)}>
      <VStack alignItems="center" gap={16}>
        <Text weight="500">{name}</Text>
        {children}
      </VStack>
    </Container>
  )

  if (isSelected) {
    return <ReversedTheme>{content}</ReversedTheme>
  }

  return content
}
