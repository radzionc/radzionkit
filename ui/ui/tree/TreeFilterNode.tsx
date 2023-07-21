import { handleWithStopPropagation } from "shared/events"
import { ComponentWithChildrenProps } from "shared/props"
import { ReactNode } from "react"
import styled from "styled-components"
import { VStack } from "../Stack"
import { defaultBorderRadiusCSS } from "../borderRadius"
import { ReversedTheme } from "../theme/ReversedTheme"
import { getColor } from "../theme/getters"
import { Text } from "../Text"

interface TreeFilterNodeProps extends ComponentWithChildrenProps {
  name: ReactNode
  onSelect: () => void
  isSelected: boolean
}

const Container = styled.div<{ isSelected: boolean }>`
  ${defaultBorderRadiusCSS}
  padding: 8px;
  cursor: pointer;
  border: 1px solid ${getColor("mist")};
  background: ${({ isSelected, theme }) =>
    isSelected
      ? theme.colors.background.toCssValue()
      : theme.colors.mist.toCssValue()};

  color: ${getColor("text")};
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
