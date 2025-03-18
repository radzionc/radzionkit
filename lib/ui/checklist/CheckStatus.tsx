import React from 'react'
import styled, { css } from 'styled-components'

import { centerContent } from '../css/centerContent'
import { interactive } from '../css/interactive'
import { CheckIcon } from '../icons/CheckIcon'
import { IconWrapper } from '../icons/IconWrapper'
import { AsProp, ChildrenProp, UiProps } from '../props'
import { getColor } from '../theme/getters'

type CheckStatusProps = UiProps & {
  value: boolean
  isInteractive?: boolean
} & Partial<ChildrenProp> &
  AsProp

const IconContainer = styled(IconWrapper)``

const Container = styled.div<{ isChecked: boolean; isInteractive?: boolean }>`
  width: 100%;
  aspect-ratio: 1/1;

  ${centerContent};

  border-radius: 4px;
  border: 1px solid ${getColor('textSupporting')};

  color: ${({ isChecked, theme: { colors } }) =>
    isChecked
      ? colors.primary
          .getHighestContrast(colors.background, colors.contrast)
          .toCssValue()
      : colors.transparent.toCssValue()};

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
      }

      ${!isChecked &&
      css`
        &:hover ${IconContainer} {
          color: ${getColor('textSupporting')};
        }
      `}
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
      <IconContainer>
        <CheckIcon />
      </IconContainer>
      {children}
    </Container>
  )
}
