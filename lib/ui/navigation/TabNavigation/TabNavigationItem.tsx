import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import { transition } from '../../css/transition'
import {
  InvisibleHTMLRadio,
  InvisibleHTMLRadioProps,
} from '../../inputs/InvisibleHTMLRadio'
import { centerContent } from '../../css/centerContent'
import {
  ComponentWithActiveState,
  ComponentWithChildrenProps,
  UIComponentProps,
} from '../../props'
import { interactive } from '../../css/interactive'
import { getColor } from '../../theme/getters'
import { round } from '../../css/round'

const Container = styled.label<ComponentWithActiveState>`
  ${interactive};
  ${round};
  text-decoration: none;
  ${centerContent};
  font-weight: 500;
  font-size: 14px;

  padding: 0 20px;
  height: 40px;

  ${transition}

  border: 1px solid ${getColor('mist')};

  ${({ isActive, theme }) =>
    isActive
      ? css`
          background: ${getColor('mist')};
          color: ${getColor('contrast')};
        `
      : css`
          &:hover {
            color: ${theme.colors.contrast.toCssValue()};
          }
        `};
`

type TabNavigationItemProps = InvisibleHTMLRadioProps &
  ComponentWithChildrenProps &
  UIComponentProps

export const TabNavigationItem = ({
  isSelected,
  children,
  className,
  style,
  ...rest
}: TabNavigationItemProps) => {
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
      style={style}
      tabIndex={-1}
      isActive={isSelected}
    >
      {children}
      <InvisibleHTMLRadio isSelected={isSelected} {...rest} />
    </Container>
  )
}
