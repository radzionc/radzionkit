import { ReactNode, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from '../../inputs/InvisibleHTMLRadio'
import { transition } from '../../css/transition'
import { centerContent } from '../../css/centerContent'
import { round } from '../../css/round'
import { getColor } from '../../theme/getters'

const Container = styled.label<{ isSelected: boolean }>`
  cursor: pointer;
  ${round}
  padding: 0 16px;
  text-decoration: none;
  ${centerContent};
  font-weight: 500;
  height: 48px;

  user-select: none;

  color: ${({ theme, isSelected }) =>
    (isSelected
      ? theme.colors.text
      : theme.colors.textSupporting
    ).toCssValue()};

  ${transition}

  :hover {
    background: ${getColor('mist')};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.mistExtra.toCssValue()};
    `};
`

interface Props extends InvisibleHTMLRadioProps {
  children: ReactNode
  className?: string
}

export const TabNavigationItem = ({
  isSelected,
  children,
  className,
  ...rest
}: Props) => {
  const ref = useRef<HTMLLabelElement>(null)
  useEffect(() => {
    if (isSelected) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }, [isSelected])

  return (
    <Container
      ref={ref}
      className={className}
      tabIndex={-1}
      isSelected={isSelected}
    >
      {children}
      <InvisibleHTMLRadio isSelected={isSelected} {...rest} />
    </Container>
  )
}
