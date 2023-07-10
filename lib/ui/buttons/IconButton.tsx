import { Ref, forwardRef } from "react"
import styled, { css } from "styled-components"
import { defaultTransitionCSS } from "../animations/transitions"
import { HSLA } from "../colors/HSLA"
import { centerContentCSS } from "../utils/centerContentCSS"
import { getCSSUnit } from "../utils/getCSSUnit"
import { getSameDimensionsCSS } from "../utils/getSameDimensionsCSS"
import { UnstyledButton } from "./UnstyledButton"
import { matchColor } from "../theme/getters"

export const iconButtonSizes = ["s", "m", "l"] as const
export type IconButtonSize = (typeof iconButtonSizes)[number]

export const iconButtonKinds = [
  "regular",
  "secondary",
  "alert",
  "minimalistic",
  "minimalisticSecondary",
] as const
export type IconButtonKind = (typeof iconButtonKinds)[number]

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  size?: IconButtonSize
  kind?: IconButtonKind
  as?: "div" | "button"
}

export const IconButton = forwardRef(function IconButton(
  { size = "m", kind = "regular", icon, ...rest }: IconButtonProps,
  ref: Ref<HTMLButtonElement> | null
) {
  return (
    <Container kind={kind} ref={ref} size={size} {...rest}>
      {icon}
    </Container>
  )
})

const sizeRecord: Record<IconButtonSize, number> = {
  s: 24,
  m: 32,
  l: 40,
}

interface ContainerProps {
  size: IconButtonSize
  kind: IconButtonKind
}

const Container = styled(UnstyledButton)<ContainerProps>`
  position: relative;
  ${centerContentCSS};
  ${({ size }) => getSameDimensionsCSS(sizeRecord[size])};

  color: ${matchColor("kind", {
    minimalisticSecondary: "textSupporting",
    minimalistic: "contrast",
    regular: "contrast",
    alert: "alert",
    secondary: "textSupporting",
  })};

  font-size: ${({ size }) => `calc(${getCSSUnit(sizeRecord[size] * 0.6)})`};

  border-radius: 8px;

  ${defaultTransitionCSS};

  background: ${({ kind, theme: { colors } }) =>
    ({
      minimalisticSecondary: new HSLA(0, 0, 0, 0),
      minimalistic: new HSLA(0, 0, 0, 0),
      regular: colors.mist,
      secondary: colors.mist,

      alert: colors.alert.getVariant({ a: (a) => a * 0.2 }),
    }[kind].toCssValue())};

  :hover {
    background: ${({ kind, theme: { colors } }) =>
      ({
        minimalisticSecondary: colors.mist,
        minimalistic: colors.mist,
        regular: colors.mistExtra,
        secondary: colors.mistExtra,
        alert: colors.alert.getVariant({ a: (a) => a * 0.28 }),
      }[kind].toCssValue())};
    ${({ kind, theme }) =>
      (kind === "secondary" || kind === "minimalisticSecondary") &&
      css`
         {
          color: ${theme.colors.contrast.toCssValue()};
        }
      `};
  }
`
