import styled, { css } from 'styled-components'
import { centerContent } from '../css/centerContent'
import { getColor } from '../theme/getters'
import { transition } from '../css/transition'
import { CheckIcon } from '../icons/CheckIcon'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'
import React from 'react'
import { interactive } from '../css/interactive'
import { getHoverVariant } from '../theme/getHoverVariant'

type CheckStatusProps = UIComponentProps & {
  value: boolean
  as?: React.ElementType
  isInteractive?: boolean
} & Partial<ComponentWithChildrenProps>

const Container = styled.div<{ isChecked: boolean; isInteractive?: boolean }>`
  width: 100%;
  aspect-ratio: 1/1;

  ${centerContent};

  border-radius: 4px;
  border: 1px solid ${getColor('textSupporting')};
  color: ${getColor('background')};

  ${transition}

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: ${getColor('primary')};
      border-color: ${getColor('primary')};
    `};

  ${({ isInteractive, isChecked }) =>
    isInteractive &&
    css`
      ${interactive};
      &:hover {
        background: ${isChecked ? getColor('primary') : getColor('mist')};
        border-color: ${isChecked
          ? getHoverVariant('primary')
          : getColor('contrast')};
      }
    `};
`

export const CheckStatus = ({
  value,
  children,
  isInteractive = false,
  ...rest
}: CheckStatusProps) => {
  return (
    <Container {...rest} isInteractive={isInteractive} isChecked={value}>
      {value && <CheckIcon />}
      {children}
    </Container>
  )
}
