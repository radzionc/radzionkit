import { ChangeEvent, InputHTMLAttributes, Ref, forwardRef } from "react";
import styled, { css } from "styled-components";
import { defaultTransitionCSS } from "ui/animations/transitions";
import { defaultInputShapeCSS } from "./config";

import {
  Props as InputWrapperProps,
  InputWrapperWithErrorMessage,
} from "./InputWrapper";

export type SharedTextInputProps = Pick<
  InputWrapperProps,
  "label" | "error"
> & {
  onValueChange?: (value: string) => void;
};

type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  SharedTextInputProps;

export const TextInput = forwardRef(function TextInputInner(
  { onValueChange, label, error, height, ...props }: TextInputProps,
  ref: Ref<HTMLInputElement> | null
) {
  return (
    <InputWrapperWithErrorMessage error={error} label={label}>
      <TextInputContainer
        {...props}
        isValid={!error}
        ref={ref}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.onChange?.(event);
          onValueChange?.(event.currentTarget.value);
        }}
      />
    </InputWrapperWithErrorMessage>
  );
});

export const commonInputCSS = css<{
  isValid: boolean;
}>`
  ${defaultInputShapeCSS};
  max-width: 100%;

  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
  padding: 12px;
  color: ${({ theme }) => theme.colors.text.toCssValue()};

  ${defaultTransitionCSS};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSupporting3.toCssValue()};
  }

  outline: 1px solid transparent;
  ${({ isValid, theme }) => {
    const errorColor = theme.colors.alert.toCssValue();
    const regularColor = isValid
      ? theme.colors.backgroundGlass.toCssValue()
      : errorColor;
    const activeColor = isValid
      ? theme.colors.primary.toCssValue()
      : errorColor;

    return css`
      border: 1px solid ${regularColor};

      :hover {
        outline-color: ${regularColor};
      }

      :focus,
      :active {
        border-color: ${activeColor};
      }
    `;
  }}
`;

export const TextInputContainer = styled.input`
  ${commonInputCSS};
`;
