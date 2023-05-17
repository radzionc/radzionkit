import { Ref, forwardRef } from 'react'
import styled, { css } from 'styled-components'


import { UnstyledButton } from '../UnstyledButton'
import { defaultTransitionCSS } from 'lib/ui/animations/transitions'
import { HSLA } from 'lib/ui/colors/HSLA'
import { centerContentCSS } from 'lib/ui/utils/centerContentCSS'
import { getCSSUnit } from 'lib/ui/utils/getCSSUnit'
import { getSameDimensionsCSS } from 'lib/ui/utils/getSameDimensionsCSS'

export const IconButtonSizes = ['xs', 's', 'm', 'l', 'xl'] as const

type IconButtonKind =
  | 'regular'
  | 'secondary'
  | 'alert'
  | 'minimalistic'
  | 'minimalisticSecondary'

type IconButtonSize = (typeof IconButtonSizes)[number]

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  size?: IconButtonSize
  kind?: IconButtonKind
  as?: 'div' | 'button'
}

export const IconButton = forwardRef(
  function IconButton(
    { size = 'm', kind = 'regular', icon, ...rest }: IconButtonProps,
    ref: Ref<HTMLButtonElement> | null
  ) {
    return (
      <Container kind={kind} ref={ref} size={size} {...rest}>
        {icon}
      </Container>
    )
  }
)

const sizeRecord: Record<IconButtonSize, number> = {
  xs: 18,
  s: 24,
  m: 32,
  l: 40,
  xl: 48,
}

interface ContainerProps {
  size: IconButtonSize
  kind: IconButtonKind
}

const Container = styled(UnstyledButton) <ContainerProps>`
  position: relative;
  ${centerContentCSS};
  ${({ size }) => getSameDimensionsCSS(sizeRecord[size])};

  color: ${({ kind, theme: { colors } }) =>
  ({
    minimalisticSecondary: colors.textSupporting,
    minimalistic: colors.contrast,
    regular: colors.contrast,
    alert: colors.alert,
    secondary: colors.textSupporting,
  }[kind].toCssValue())};
  font-size: ${({ size }) => `calc(${getCSSUnit(sizeRecord[size] * 0.6)})`};

  border-radius: 8px;

  ${defaultTransitionCSS};

  background: ${({ kind, theme: { colors } }) =>
  ({
    minimalisticSecondary: new HSLA(0, 0, 0, 0),
    minimalistic: new HSLA(0, 0, 0, 0),
    regular: colors.backgroundGlass,
    secondary: colors.backgroundGlass,

    alert: colors.alert.getVariant({ a: (a) => a * 0.2 }),
  }[kind].toCssValue())};

  :hover {
    background: ${({ kind, theme: { colors } }) =>
  ({
    minimalisticSecondary: colors.backgroundGlass,
    minimalistic: colors.backgroundGlass,
    regular: colors.backgroundGlass2,
    secondary: colors.backgroundGlass2,
    alert: colors.alert.getVariant({ a: (a) => a * 0.28 }),
  }[kind].toCssValue())};
    ${({ kind, theme }) =>
    (kind === 'secondary' || kind === 'minimalisticSecondary') &&
    css`
         {
          color: ${theme.colors.contrast.toCssValue()};
        }
      `};
  }
`
