import styled from "styled-components";

export interface InvisibleHTMLCheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const CheckboxInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`;

export const InvisibleHTMLCheckbox = ({
  value,
  onChange,
}: InvisibleHTMLCheckboxProps) => (
  <CheckboxInput
    type="checkbox"
    checked={value}
    onChange={(event) => {
      onChange(event.currentTarget.checked);
    }}
  />
);
