import styled, { css } from "styled-components";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

import { InputErrorText } from "./InputErrorText";

export interface Props {
  label?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
  as?: string | React.ComponentType<any>;
}

const Container = styled(VStack)<{ isValid: boolean }>`
  color: ${({ isValid, theme }) =>
    (isValid ? theme.colors.textSupporting : theme.colors.alert).toCssValue()};

  ${({ isValid, theme }) =>
    isValid &&
    css`
      :focus-within {
        color: ${theme.colors.text.toCssValue()};
      }
    `}
`;

export const InputWrapper = ({
  label,
  children,
  error,
  as = "label",
}: Props) => (
  <Container tabIndex="-1" isValid={!error} fullWidth gap={8} as={as}>
    {label && <Text as="div">{label}</Text>}
    {children}
  </Container>
);

export const InputWrapperWithErrorMessage = ({ children, ...props }: Props) => (
  <InputWrapper {...props}>
    <VStack style={{ position: "relative" }} fullWidth gap={4}>
      {children}
      <InputErrorText>{props.error}</InputErrorText>
    </VStack>
  </InputWrapper>
);
