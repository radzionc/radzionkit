import { ReactNode, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import { transition } from '../../css/transition'
import { match } from '@reactkit/utils/match'
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from '../../inputs/InvisibleHTMLRadio'
import { round } from '../../css/round'
import { centerContent } from '../../css/centerContent'

const Container = styled.label<{
  isSelected: boolean
  size: TabNavigationItemSize
}>`
  cursor: pointer;
  ${round}
  text-decoration: none;
  ${centerContent};
  font-weight: 500;

  user-select: none;

  ${({ size }) =>
    match(size, {
      m: () => css`
        padding: 0 20px;
        height: 48px;
      `,
      s: () => css`
        padding: 0 16px;
        height: 32px;
        font-size: 14px;
      `,
    })}

  font-size: 16px;

  ${transition}

  border: 1px solid transparent;

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background: ${theme.colors.mist.toCssValue()};
          color: ${theme.colors.contrast.toCssValue()};
          border-color: ${theme.colors.mist.toCssValue()};
        `
      : css`
          :hover {
            color: ${theme.colors.contrast.toCssValue()};
          }
        `};
`

type TabNavigationItemSize = 's' | 'm'

interface Props extends InvisibleHTMLRadioProps {
  children: ReactNode
  className?: string
  size?: TabNavigationItemSize
}

export const TabNavigationItem = ({
  isSelected,
  children,
  className,
  size = 'm',
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
      size={size}
    >
      {children}
      <InvisibleHTMLRadio isSelected={isSelected} {...rest} />
    </Container>
  )
}
