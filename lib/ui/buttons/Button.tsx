import { match } from '@lib/utils/match'
import React, { Ref } from 'react'
import styled, { css } from 'styled-components'

import { MergeRefs } from '../base/MergeRefs'
import { centerContent } from '../css/centerContent'
import { horizontalPadding } from '../css/horizontalPadding'
import { toSizeUnit } from '../css/toSizeUnit'
import { transition } from '../css/transition'
import { CenterAbsolutely } from '../layout/CenterAbsolutely'
import { Spinner } from '../loaders/Spinner'
import { getHoverVariant } from '../theme/getHoverVariant'
import { getColor } from '../theme/getters'
import { Tooltip } from '../tooltips/Tooltip'

import { UnstyledButton } from './UnstyledButton'

export const buttonSizes = ['xs', 's', 'm', 'l', 'xl'] as const

type ButtonSize = (typeof buttonSizes)[number]

export const buttonKinds = [
  'primary',
  'secondary',
  'reversed',
  'alert',
  'outlined',
  'outlinedAlert',
  'ghost',
  'ghostSecondary',
  'ghostPrimary',
] as const

export type ButtonKind = (typeof buttonKinds)[number]

interface ContainerProps {
  size: ButtonSize
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  kind: ButtonKind
}

const Container = styled(UnstyledButton)<ContainerProps>`
  ${transition};
  ${centerContent};

  position: relative;

  white-space: nowrap;
  font-weight: 600;
  flex-shrink: 0;

  border-radius: ${({ isRounded }) => toSizeUnit(isRounded ? 100 : 8)};

  ${({ size }) =>
    match(size, {
      xs: () => css`
        ${horizontalPadding(8)}
        height: 28px;
        font-size: 12px;
      `,
      s: () => css`
        ${horizontalPadding(16)}
        height: 36px;
        font-size: 14px;
      `,
      m: () => css`
        ${horizontalPadding(20)}
        height: 40px;
        font-size: 14px;
      `,
      l: () => css`
        ${horizontalPadding(20)}
        height: 48px;
        font-size: 16px;
      `,
      xl: () => css`
        ${horizontalPadding(28)}
        height: 56px;
        font-size: 16px;
      `,
    })}

  ${({ kind }) =>
    match(kind, {
      primary: () => css`
        background: ${getColor('primary')};
        color: ${({ theme: { colors } }) =>
          colors.primary
            .getHighestContrast(colors.background, colors.contrast)
            .toCssValue()};
      `,
      secondary: () => css`
        background: ${getColor('mist')};
        color: ${getColor('contrast')};
      `,
      reversed: () => css`
        background: ${getColor('contrast')};
        color: ${getColor('background')};
      `,
      alert: () => css`
        background: ${getColor('alert')};
        color: ${getColor('white')};
      `,
      outlined: () => css`
        border: 1px solid ${getColor('mistExtra')};
        color: ${getColor('contrast')};
      `,
      outlinedAlert: () => css`
        border: 1px solid ${getColor('alert')};
        color: ${getColor('alert')};
      `,
      ghost: () => css`
        color: ${getColor('contrast')};
      `,
      ghostSecondary: () => css`
        color: ${getColor('textSupporting')};
      `,
      ghostPrimary: () => css`
        color: ${getColor('textPrimary')};
      `,
    })}
  
  ${({ isDisabled, isLoading, kind }) =>
    !isDisabled &&
    !isLoading &&
    css`
      &:hover {
        ${match(kind, {
          primary: () => css`
            background: ${getHoverVariant('primary')};
          `,
          secondary: () => css`
            background: ${getColor('mistExtra')};
          `,
          reversed: () => css`
            background: ${getColor('text')};
          `,
          alert: () => css`
            background: ${getHoverVariant('alert')};
          `,
          outlined: () => css`
            background: ${getColor('mist')};
            color: ${getColor('contrast')};
          `,
          outlinedAlert: () => css`
            background: ${({ theme }) =>
              theme.colors.alert
                .getVariant({ a: (a: number) => a * 0.12 })
                .toCssValue()};
          `,
          ghost: () => css`
            background: ${getColor('mist')};
          `,
          ghostSecondary: () => css`
            background: ${getColor('mist')};
            color: ${getColor('text')};
          `,
          ghostPrimary: () => css`
            background: ${getColor('mist')};
          `,
        })}
      }
    `};

  cursor: ${({ isDisabled, isLoading }) =>
    isDisabled ? 'initial' : isLoading ? 'wait' : 'pointer'};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.8;
    `};
`

export type ButtonProps = Omit<
  React.ComponentProps<typeof Container>,
  'size' | 'kind' | 'isDisabled'
> & {
  size?: ButtonSize
  isDisabled?: boolean | string
  isLoading?: boolean
  isRounded?: boolean
  kind?: ButtonKind
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
  ref?: Ref<HTMLButtonElement>
}

const Hide = styled.div`
  opacity: 0;
`

export function Button({
  children,
  size = 'm',
  isDisabled = false,
  isLoading = false,
  onClick,
  kind = 'primary',
  ref,
  ...rest
}: ButtonProps) {
  const content = isLoading ? (
    <>
      <Hide>{children}</Hide>
      <CenterAbsolutely>
        <Spinner />
      </CenterAbsolutely>
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

  if (typeof isDisabled === 'string') {
    return (
      <Tooltip
        content={isDisabled}
        renderOpener={({ ref: tooltipRef, ...tooltipRest }) => (
          <MergeRefs
            refs={[ref, tooltipRef]}
            render={(ref) => (
              <Container ref={ref} {...containerProps} {...tooltipRest}>
                {content}
              </Container>
            )}
          />
        )}
      />
    )
  }

  return (
    <Container ref={ref} {...containerProps}>
      {content}
    </Container>
  )
}
