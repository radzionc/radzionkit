import { ReactNode } from "react";
import { ClosableComponentProps } from "lib/shared/props";
import styled from "styled-components";
import { Panel } from "../Panel/Panel";
import { HStack, VStack } from "../Stack";
import { getVerticalPaddingCSS } from "../utils/getVerticalPaddingCSS";
import { getHorizontalMarginCSS } from "../utils/getHorizontalMarginCSS";
import { Text } from "../Text";
import { CloseIconButton } from "../buttons/square/CloseIconButton";

interface Props extends ClosableComponentProps {
  title: ReactNode;
  children: ReactNode;
}

const Container = styled(Panel)`
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background: ${({ theme: { colors, name } }) =>
    (name === "dark" ? colors.foreground : colors.background).toCssValue()};
  overflow: hidden;
  min-width: 260px;
  max-width: 320px;
`;

const Header = styled(HStack)`
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  ${getHorizontalMarginCSS(12)};
  ${getVerticalPaddingCSS(12)};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
`;

export const PopoverMenu = ({ children, title, onClose }: Props) => {
  return (
    <Container padding={4}>
      <VStack gap={12}>
        <Header>
          <Text weight="semibold" color="supporting" cropped>
            {title}
          </Text>
          <CloseIconButton onClick={onClose} />
        </Header>
        <VStack fullWidth alignItems="start">
          {children}
        </VStack>
      </VStack>
    </Container>
  );
};
