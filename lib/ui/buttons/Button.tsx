import { ComponentWithChildrenProps } from "lib/shared/props"
import styled, { css } from "styled-components"
import { defaultTransitionCSS } from "lib/ui/animations/transitions"
import { centerContentCSS } from "lib/ui/utils/centerContentCSS"
import { getHorizontalPaddingCSS } from "lib/ui/utils/getHorizontalPaddingCSS"
import { Spinner } from "lib/ui/Spinner"

import { getCSSUnit } from "lib/ui/utils/getCSSUnit"

import { Tooltip } from "lib/ui/Tooltip"
import { UnstyledButton } from "./UnstyledButton"
import { match } from "lib/shared/utils/match"
import { getColor } from "../theme/getters"

export const buttonSizes = ["xs", "s", "m", "l", "xl"] as const

type ButtonSize = (typeof buttonSizes)[number]

export const buttonKinds = [
  "primary",
  "secondary",
  "reversed",
  "attention",
  "alert",
  "outlined",
  "outlinedAlert",
  "ghost",
  "ghostSecondary",
] as const

export type ButtonKind = (typeof buttonKinds)[number]

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentWithChildrenProps & {
    as?: "button" | "div"
    size?: ButtonSize
    isDisabled?: boolean | string
    isLoading?: boolean
    isRounded?: boolean
    kind?: ButtonKind
  }

interface ContainerProps {
  size: ButtonSize
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  kind: ButtonKind
}

const Container = styled(UnstyledButton)<ContainerProps>`
  ${defaultTransitionCSS};
  ${centerContentCSS};

  position: relative;

  white-space: nowrap;
  font-weight: 500;

  border-radius: ${({ isRounded }) => getCSSUnit(isRounded ? 100 : 8)};

  ${({ size }) =>
    match(size, {
      xs: () => css`
        ${getHorizontalPaddingCSS(8)}
        height: 28px;
        font-size: 14px;
      `,
      s: () => css`
        ${getHorizontalPaddingCSS(16)}
        height: 36px;
        font-size: 14px;
      `,
      m: () => css`
        ${getHorizontalPaddingCSS(20)}
        height: 40px;
        font-size: 16px;
      `,
      l: () => css`
        ${getHorizontalPaddingCSS(20)}
        height: 48px;
        font-size: 16px;
      `,
      xl: () => css`
        ${getHorizontalPaddingCSS(40)}
        height: 56px;
        font-size: 18px;
      `,
    })}

  ${({ kind }) =>
    match(kind, {
      primary: () => css`
        background: ${getColor("primary")};
        color: ${getColor("white")};
      `,
      secondary: () => css`
        background: ${getColor("mist")};
        color: ${getColor("contrast")};
      `,
      reversed: () => css`
        background: ${getColor("contrast")};
        color: ${getColor("background")};
      `,
      attention: () => css`
        background: ${getColor("attention")};
        color: ${getColor("white")};
      `,
      alert: () => css`
        background: ${getColor("alert")};
        color: ${getColor("white")};
      `,
      outlined: () => css`
        border: 1px solid ${getColor("mistExtra")};
        color: ${getColor("contrast")};
      `,
      outlinedAlert: () => css`
        border: 1px solid ${getColor("alert")};
        color: ${getColor("alert")};
      `,
      ghost: () => css`
        color: ${getColor("contrast")};
      `,
      ghostSecondary: () => css`
        color: ${getColor("textSupporting")};
      `,
    })}
  
  ${({ isDisabled, isLoading, kind }) =>
    !isDisabled &&
    !isLoading &&
    css`
      :hover {
        ${match(kind, {
          primary: () => css`
            background: ${getColor("primaryHover")};
          `,
          secondary: () => css`
            background: ${getColor("mistExtra")};
          `,
          reversed: () => css`
            background: ${getColor("text")};
          `,
          attention: () => css`
            background: ${getColor("attentionHover")};
          `,
          alert: () => css`
            background: ${({ theme }) =>
              theme.colors.alert
                .getVariant({ l: (l) => l * 0.92 })
                .toCssValue()};
          `,
          outlined: () => css`
            background: ${getColor("mist")};
            color: ${getColor("contrast")};
          `,
          outlinedAlert: () => css`
            background: ${({ theme }) =>
              theme.colors.alert
                .getVariant({ a: (a) => a * 0.12 })
                .toCssValue()};
          `,
          ghost: () => css`
            background: ${getColor("mist")};
          `,
          ghostSecondary: () => css`
            background: ${getColor("mist")};
          `,
        })}
      }
    `};

  cursor: ${({ isDisabled, isLoading }) =>
    isDisabled ? "initial" : isLoading ? "wait" : "pointer"};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.8;
    `};
`

const LoaderWr = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${centerContentCSS};
`

const HideChildren = styled.div`
  opacity: 0;
`

export const Button = ({
  children,
  size = "m",
  isDisabled = false,
  isLoading = false,
  onClick,
  kind = "primary",
  ...rest
}: ButtonProps) => {
  const content = isLoading ? (
    <>
      <HideChildren>{children}</HideChildren>
      <LoaderWr>
        <Spinner size={18} />
      </LoaderWr>
    </>
  ) : (
    children
  )

  const containerProps = {
    kind,
    size,
    isDisabled: !!isDisabled,
    isLoading,
    onClick: isDisabled || isLoading ? undefined : onClick,
    ...rest,
  }

  if (typeof isDisabled === "string") {
    return (
      <Tooltip
        content={isDisabled}
        renderOpener={(props) => (
          <Container {...props} {...containerProps}>
            {content}
          </Container>
        )}
      />
    )
  }

  return <Container {...containerProps}>{content}</Container>
}
