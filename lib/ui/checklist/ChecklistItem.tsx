import { ReactNode } from "react"
import styled, { css } from "styled-components"
import { Hoverable } from "../Hoverable"
import { defaultTransitionCSS } from "../animations/transitions"
import { CheckIcon } from "../icons/CheckIcon"
import {
  InvisibleHTMLCheckboxProps,
  InvisibleHTMLCheckbox,
} from "../inputs/Checkbox/InvisibleHTMLCheckbox"
import { centerContentCSS } from "../utils/centerContentCSS"
import { Text } from "../Text"
import { ChecklistItemFrame } from "./ChecklistItemFrame"

interface ChecklistItemProps extends InvisibleHTMLCheckboxProps {
  name: ReactNode
  style?: React.CSSProperties
}

export const Box = styled.div<{ isChecked: boolean }>`
  width: 100%;
  aspect-ratio: 1/1;

  ${centerContentCSS};

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.textShy.toCssValue()};
  color: ${({ theme }) => theme.colors.background.toCssValue()};

  ${defaultTransitionCSS}

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: ${({ theme }) => theme.colors.primary.toCssValue()};
      border-color: ${({ theme }) => theme.colors.primary.toCssValue()};
    `};
`

const Content = styled(Text)<{ isChecked: boolean }>`
  max-width: 100%;
  position: relative;
  color: ${({ theme, isChecked }) =>
    (isChecked ? theme.colors.textSupporting : theme.colors.text).toCssValue()};
`

const Line = styled.span<{ isChecked: boolean }>`
  position: absolute;
  ${defaultTransitionCSS};
  left: 0;
  border-top: 2px solid;
  bottom: 8px;
  width: ${({ isChecked }) => (isChecked ? "100%" : "0%")};
`

export const ChecklistItem = ({
  value,
  onChange,
  name,
  style,
}: ChecklistItemProps) => {
  return (
    <Hoverable style={style} as="label">
      <ChecklistItemFrame>
        <Box isChecked={value}>{value && <CheckIcon />}</Box>
        <Content isChecked={value} cropped>
          {name}
          <Line isChecked={value} />
        </Content>
        <InvisibleHTMLCheckbox value={value} onChange={onChange} />
      </ChecklistItemFrame>
    </Hoverable>
  )
}
