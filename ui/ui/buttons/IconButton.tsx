import { ComponentProps, Ref, forwardRef } from "react"
import styled from "styled-components"
import { defaultTransitionCSS } from "../animations/transitions"
import { centerContentCSS } from "../utils/centerContentCSS"
import { getCSSUnit } from "../utils/getCSSUnit"
import { getSameDimensionsCSS } from "../utils/getSameDimensionsCSS"
import { matchColor } from "../theme/getters"
import { match } from "shared/utils/match"
import { interactiveCSS } from "../utils/interactiveCSS"

export const iconButtonSizes = ["s", "m", "l"] as const
export type IconButtonSize = (typeof iconButtonSizes)[number]

export const iconButtonKinds = ["regular", "secondary", "alert"] as const
export type IconButtonKind = (typeof iconButtonKinds)[number]

const sizeRecord: Record<IconButtonSize, number> = {
  s: 24,
  m: 32,
  l: 40,
}

interface ContainerProps {
  size: IconButtonSize
  kind: IconButtonKind
}

const Container = styled.button<ContainerProps>`
  all: unset;
  ${interactiveCSS};
  position: relative;
  ${centerContentCSS};
  ${({ size }) => getSameDimensionsCSS(sizeRecord[size])};

  color: ${matchColor("kind", {
    regular: "text",
    secondary: "text",
    alert: "alert",
  })};

  font-size: ${({ size }) => `calc(${getCSSUnit(sizeRecord[size] * 0.6)})`};

  border-radius: 8px;

  ${defaultTransitionCSS};

  background: ${({ kind, theme: { colors } }) =>
    match(kind, {
      regular: () => colors.mist,
      secondary: () => colors.transparent,
      alert: () => colors.alert.getVariant({ a: (a) => a * 0.12 }),
    }).toCssValue()};

  :hover {
    background: ${({ kind, theme: { colors } }) =>
      match(kind, {
        regular: () => colors.mist,
        secondary: () => colors.mist,
        alert: () => colors.alert.getVariant({ a: (a) => a * 0.24 }),
      }).toCssValue()};

    color: ${matchColor("kind", {
      regular: "contrast",
      secondary: "contrast",
      alert: "alert",
    })};
  }
`

export interface IconButtonProps extends ComponentProps<typeof Container> {
  icon: React.ReactNode
  size?: IconButtonSize
  kind?: IconButtonKind
  title: string
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
