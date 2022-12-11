import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { defaultTransitionCSS } from "lib/ui/animations/transitions";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { UnstyledButton } from "../buttons/UnstyledButton";

type MenuOptionKind = "regular" | "alert";

export interface MenuOptionProps {
  icon?: ReactNode;
  text: string;
  onSelect: () => void;
  kind?: MenuOptionKind;
}

const Container = styled(UnstyledButton)<{
  kind: MenuOptionKind;
}>`
  ${defaultTransitionCSS};

  border-radius: 8px;
  width: 100%;
  padding: 8px 12px;

  ${({ kind }) =>
    ({
      regular: css`
        color: ${({ theme }) => theme.colors.text.toCssValue()};
      `,
      alert: css`
        color: ${({ theme }) => theme.colors.alert.toCssValue()};
      `,
    }[kind])};

  :hover {
    ${({ kind }) =>
      ({
        regular: css`
          background: ${({ theme }) =>
            theme.colors.text.getVariant({ a: () => 0.12 }).toCssValue()};
        `,
        alert: css`
          background: ${({ theme }) =>
            theme.colors.alert.getVariant({ a: () => 0.12 }).toCssValue()};
        `,
      }[kind])};
  }
`;

export const MenuOption = ({
  text,
  icon,
  onSelect,
  kind = "regular",
}: MenuOptionProps) => {
  return (
    <Container kind={kind} onClick={onSelect}>
      <HStack alignItems="center" gap={12}>
        <Text style={{ display: "flex" }}>{icon}</Text>
        <Text>{text}</Text>
      </HStack>
    </Container>
  );
};
