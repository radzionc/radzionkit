import { Panel } from "lib/ui/Panel/Panel";
import { Text } from "lib/ui/Text";
import { ReactNode } from "react";
import styled from "styled-components";
import { Slider, SliderProps } from ".";

import { InputWrapperWithErrorMessage } from "../InputWrapper";

interface Props extends SliderProps {
  label: ReactNode;
  formatValue: (value: number) => string;
  alignValue?: "start" | "end";
}

const Content = styled.div`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 80px;
  align-items: center;
  gap: 16px;
`;

export const AmountInput = ({
  value,
  step,
  min = 0,
  max,
  onChange,
  label,
  formatValue,
  color,
  size = "l",
  alignValue = "end",
}: Props) => {
  return (
    <InputWrapperWithErrorMessage label={label}>
      <Panel>
        <Content>
          <Slider
            step={step}
            size={size}
            min={min}
            max={max}
            onChange={onChange}
            value={value}
            color={color}
          />
          <Text style={{ textAlign: alignValue }} weight="bold">
            {formatValue(value)}
          </Text>
        </Content>
      </Panel>
    </InputWrapperWithErrorMessage>
  );
};
