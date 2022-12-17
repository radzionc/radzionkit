import styled from "styled-components";

export interface InvisibleHTMLRadioProps {
  groupName: string;
  value: string | number;
  isSelected: boolean;
  onSelect: () => void;
  autoFocus?: boolean;
}

const RadioInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const InvisibleHTMLRadio = ({
  groupName,
  value,
  isSelected,
  onSelect,
}: InvisibleHTMLRadioProps) => (
  <RadioInput
    type="radio"
    name={groupName}
    checked={isSelected}
    value={value}
    onChange={(event) => {
      if (event.currentTarget.value === value.toString()) {
        onSelect();
      }
    }}
  />
);
