import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Hoverable } from '../Hoverable'
import { defaultTransitionCSS } from '../animations/transitions'
import { CheckIcon } from '../icons/CheckIcon'
import { InvisibleHTMLCheckboxProps, InvisibleHTMLCheckbox } from '../inputs/Checkbox/InvisibleHTMLCheckbox'
import { centerContentCSS } from '../utils/centerContentCSS'
import { Text } from '../Text'
import { ChecklistItemFrame } from './ChecklistItemFrame'

interface ChecklistItemProps extends InvisibleHTMLCheckboxProps {
  name: ReactNode
  style?: React.CSSProperties
}

export const Box = styled.div<{ isChecked: boolean }>`
  width: 100%;
  aspect-ratio: 1/1;

  ${centerContentCSS};
  
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.textSupporting3.toCssValue()};
  color: ${({ theme }) => theme.colors.background.toCssValue()};

  ${defaultTransitionCSS}

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: ${({ theme }) => theme.colors.primary.toCssValue()};
      border-color: ${({ theme }) => theme.colors.primary.toCssValue()};
    `};
`

const TextWrapper = styled.div<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme, isChecked }) =>
    (isChecked ? theme.colors.textSupporting : theme.colors.text).toCssValue()};
`

const Line = styled.div<{ isChecked: boolean }>`
  position: absolute;
  ${defaultTransitionCSS};
  left: 0;
  border-bottom: 2px solid;
  height: 4px;
  width: ${({ isChecked }) => (isChecked ? '100%' : '0%')};
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
        <TextWrapper isChecked={value}>
          <Text cropped as="div">
            {name}
          </Text>
          <Line isChecked={value} />
        </TextWrapper>
        <InvisibleHTMLCheckbox value={value} onChange={onChange} />
      </ChecklistItemFrame>
    </Hoverable>
  )
}
