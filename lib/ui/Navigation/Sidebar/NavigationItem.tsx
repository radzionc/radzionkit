import styled, { css } from "styled-components"
import { defaultTransitionCSS } from "lib/ui/animations/transitions"
import { HStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"
import { getColor } from "lib/ui/theme/getters"

interface Props {
  icon?: React.ReactNode
  name: string
  isActive?: boolean
  decoration?: React.ReactNode
}

export const Container = styled.div<{ isSelected?: boolean }>`
  padding: 0 16px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  ${defaultTransitionCSS};
  border-radius: 8px;
  font-weight: 500;
  color: ${getColor("textSupporting")};
  :hover {
    background: ${getColor("backgroundGlass")};
  }

  :active {
    background: ${getColor("backgroundGlass2")};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.backgroundGlass.toCssValue()};
      color: ${theme.colors.text.toCssValue()};
    `}
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
`

export const NavigationItem = ({
  icon,
  name,
  isActive,
  decoration = null,
}: Props) => {
  return (
    <Container isSelected={isActive}>
      <Text size={18} style={{ position: "relative" }} as="div">
        <HStack gap={8}>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <div>{name}</div>
        </HStack>
        {decoration}
      </Text>
    </Container>
  )
}
