import { getColor } from "ui/theme/getters"
import styled, { css } from "styled-components"

export const DropdownItem = styled.div<{ isHighlighted: boolean }>`
  padding: 8px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text.toCssValue()};

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: ${getColor("mist")};
    `}
`
