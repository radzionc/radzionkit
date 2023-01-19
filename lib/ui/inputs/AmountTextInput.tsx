import { Ref, forwardRef, ReactNode, useRef } from "react";
import styled from "styled-components";
import { HStack } from "../Stack";
import { centerContentCSS } from "../utils/centerContentCSS";

import { TextInput, TextInputProps } from "./TextInput";

type AmountTextInputProps = Omit<TextInputProps, "value" | "onValueChange"> & {
  value: number | undefined;
  onValueChange?: (value: number | undefined) => void;
  unit: ReactNode;
  shouldBePositive?: boolean;
  suggestion?: ReactNode;
};

const UnitContainer = styled.div`
  border-radius: 8px;
  position: absolute;
  left: 12px;
  ${centerContentCSS};
`;

const Input = styled(TextInput)`
  padding-left: 36px;
`;

export const AmountTextInput = forwardRef(function AmountInputInner(
  {
    onValueChange,
    onChange,
    max,
    inputOverlay,
    unit,
    value,
    shouldBePositive,
    suggestion,
    label,
    ...props
  }: AmountTextInputProps,
  ref: Ref<HTMLInputElement> | null
) {
  const valueAsString = value?.toString() ?? "";

  const inputValue = useRef<string>(valueAsString);

  return (
    <Input
      {...props}
      type="number"
      label={
        <HStack
          alignItems="center"
          justifyContent="space-between"
          gap={16}
          fullWidth
        >
          {label}
          {suggestion}
        </HStack>
      }
      value={valueAsString === inputValue.current ? inputValue.current : value}
      ref={ref}
      inputOverlay={unit ? <UnitContainer>{unit}</UnitContainer> : undefined}
      onValueChange={(value) => {
        const valueAsNumber = Number(value);
        if (Number.isNaN(valueAsNumber)) {
          return;
        }

        if (shouldBePositive && valueAsNumber < 0) {
          return;
        }

        inputValue.current = value;
        onValueChange?.(value === "" ? undefined : valueAsNumber);
      }}
    />
  );
});
