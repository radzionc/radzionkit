import { ComponentProps, Ref, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { UnstyledButton } from './UnstyledButton'
import { match } from '@lib/utils/match'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { toSizeUnit } from '../css/toSizeUnit'
import { transition } from '../css/transition'
import { getColor, matchColor } from '../theme/getters'
import { borderRadius } from '../css/borderRadius'
import { getHoverVariant } from '@lib/ui/theme/getHoverVariant'

export const iconButtonSizes = ['s', 'm', 'l'] as const
export type IconButtonSize = (typeof iconButtonSizes)[number]

export const iconButtonKinds = [
  'regular',
  'secondary',
  'alert',
  'alertSecondary',
] as const
export type IconButtonKind = (typeof iconButtonKinds)[number]

export const iconButtonSizeRecord: Record<IconButtonSize, number> = {
  s: 24,
  m: 32,
  l: 40,
}

export const iconButtonIconSizeRecord: Record<IconButtonSize, number> = {
  s: 14,
  m: 14,
  l: 16,
}

interface ContainerProps {
  size: IconButtonSize
  kind: IconButtonKind
}

const Container = styled(UnstyledButton)<ContainerProps>`
  position: relative;
  ${centerContent};
  ${({ size }) => sameDimensions(iconButtonSizeRecord[size])};

  color: ${matchColor('kind', {
    regular: 'text',
    secondary: 'text',
    alert: 'alert',
    alertSecondary: 'alert',
  })};

  font-size: ${({ size }) => toSizeUnit(iconButtonIconSizeRecord[size])};

  ${borderRadius.s};

  ${transition};

  ${({ kind }) =>
    kind !== 'secondary' &&
    kind !== 'alertSecondary' &&
    css`
      border: 1px solid ${getColor('mist')};
    `}

  background: ${({ kind, theme: { colors } }) =>
    match(kind, {
      regular: () => colors.foreground,
      secondary: () => colors.transparent,
      alert: () => colors.alert.getVariant({ a: (a) => a * 0.12 }),
      alertSecondary: () => colors.transparent,
    }).toCssValue()};

  &:hover {
    background: ${({ kind, theme }) =>
      match(kind, {
        regular: () => getHoverVariant('foreground')({ theme }),
        secondary: () => theme.colors.mist.toCssValue(),
        alert: () =>
          theme.colors.alert.getVariant({ a: (a) => a * 0.24 }).toCssValue(),
        alertSecondary: () =>
          theme.colors.alert.getVariant({ a: (a) => a * 0.12 }).toCssValue(),
      })};

    color: ${matchColor('kind', {
      regular: 'contrast',
      secondary: 'contrast',
      alert: 'alert',
      alertSecondary: 'alert',
    })};
  }
`

export type IconButtonProps = Omit<
  ComponentProps<typeof Container>,
  'size' | 'kind'
> & {
  icon: React.ReactNode
  size?: IconButtonSize
  kind?: IconButtonKind
  title: string
  as?: React.ElementType
}

export const IconButton = forwardRef(function IconButton(
  {
    size = 'm',
    kind = 'regular',
    icon,
    type = 'button',
    ...rest
  }: IconButtonProps,
  ref: Ref<HTMLButtonElement> | null,
) {
  return (
    <Container type={type} kind={kind} ref={ref} size={size} {...rest}>
      {icon}
    </Container>
  )
})
