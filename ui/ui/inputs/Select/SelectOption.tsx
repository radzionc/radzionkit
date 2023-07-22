import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { defaultInputShapeCSS } from '../config'
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from '../InvisibleHTMLRadio'
import { defaultTransitionCSS } from '../../animations/transitions'
import { getColor } from '../../theme/getters'
import { centerContentCSS } from '../../utils/centerContentCSS'

const Container = styled.label<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;

  ${centerContentCSS}
  background: ${getColor('mist')};

  ${defaultInputShapeCSS};
  ${defaultTransitionCSS};

  font-weight: 500;

  color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};
  :hover {
    background: ${({ theme }) => theme.colors.mistExtra.toCssValue()};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme.colors.mistExtra.toCssValue()};
      color: ${({ theme }) => theme.colors.text.toCssValue()};
    `};
`

interface Props extends InvisibleHTMLRadioProps {
  children: ReactNode
  className?: string
}

export const SelectOption = ({
  isSelected,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <Container className={className} tabIndex={-1} isSelected={isSelected}>
      {children}
      <InvisibleHTMLRadio isSelected={isSelected} {...rest} />
    </Container>
  )
}
