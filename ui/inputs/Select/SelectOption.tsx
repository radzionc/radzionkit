import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { defaultInputShapeCSS } from '../config'
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from '../InvisibleHTMLRadio'
import { getColor } from '../../theme/getters'
import { transition } from '../../css/transition'
import { centerContent } from '../../css/centerContent'

const Container = styled.label<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;

  ${centerContent}
  background: ${getColor('mist')};

  ${defaultInputShapeCSS};
  ${transition};

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
