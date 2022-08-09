import styled, { css } from "styled-components";
import { defaultTransitionCSS } from "ui/animations/transitions";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";

interface Props {
  icon?: React.ReactNode;
  name: string;
  isActive?: boolean;
  decoration?: React.ReactNode;
}

export const Container = styled.div<{ isActive?: boolean }>`
  padding: 0 16px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  ${defaultTransitionCSS};
  border-radius: 8px;
  :hover {
    background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
  }
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.colors.backgroundGlass.toCssValue()};
    `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
`;

export const NavigationItem = ({
  icon,
  name,
  isActive,
  decoration = null,
}: Props) => {
  return (
    <Container isActive={isActive}>
      <Text
        size={18}
        style={{ position: "relative" }}
        as="div"
        color={isActive ? "regular" : "supporting"}
      >
        <HStack gap={8}>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <div>{name}</div>
        </HStack>
        {decoration}
      </Text>
    </Container>
  );
};
