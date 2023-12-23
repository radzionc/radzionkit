import styled, { css } from 'styled-components'

import { UnstyledButton } from './UnstyledButton'
import { match } from '@radzionkit/utils/match'
import { centerContent } from '../css/centerContent'
import { horizontalPadding } from '../css/horizontalPadding'
import { toSizeUnit } from '../css/toSizeUnit'
import { transition } from '../css/transition'
import { CenterAbsolutely } from '../layout/CenterAbsolutely'
import { Spinner } from '../loaders/Spinner'
import { Tooltip } from '../tooltips/Tooltip'
import { getHoverVariant } from '../colors/getHoverVariant'
import { getColor } from '../theme/getters'

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
  font-weight: 500;

  border-radius: ${({ isRounded }) => toSizeUnit(isRounded ? 100 : 8)};

  ${({ size }) =>
    match(size, {
      xs: () => css`
        ${horizontalPadding(8)}
        height: 28px;
        font-size: 14px;
      `,
      s: () => css`
        ${horizontalPadding(16)}
        height: 36px;
        font-size: 14px;
      `,
      m: () => css`
        ${horizontalPadding(20)}
        height: 40px;
        font-size: 16px;
      `,
      l: () => css`
        ${horizontalPadding(20)}
        height: 48px;
        font-size: 16px;
      `,
      xl: () => css`
        ${horizontalPadding(40)}
        height: 56px;
        font-size: 18px;
      `,
    })}

  ${({ kind }) =>
    match(kind, {
      primary: () => css`
        background: ${getColor('primary')};
        color: ${getColor('white')};
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
    })}
  
  ${({ isDisabled, isLoading, kind }) =>
    !isDisabled &&
    !isLoading &&
    css`
      :hover {
        ${match(kind, {
          primary: () => css`
            background: ${({ theme }) =>
              getHoverVariant(theme.colors.primary).toCssValue()};
          `,
          secondary: () => css`
            background: ${getColor('mistExtra')};
          `,
          reversed: () => css`
            background: ${getColor('text')};
          `,
          alert: () => css`
            background: ${({ theme }) =>
              getHoverVariant(theme.colors.alert).toCssValue()};
          `,
          outlined: () => css`
            background: ${getColor('mist')};
            color: ${getColor('contrast')};
          `,
          outlinedAlert: () => css`
            background: ${({ theme }) =>
              theme.colors.alert
                .getVariant({ a: (a) => a * 0.12 })
                .toCssValue()};
          `,
          ghost: () => css`
            background: ${getColor('mist')};
          `,
          ghostSecondary: () => css`
            background: ${getColor('mist')};
            color: ${getColor('text')};
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

export interface ButtonProps extends React.ComponentProps<typeof Container> {
  size?: ButtonSize
  isDisabled?: boolean | string
  isLoading?: boolean
  isRounded?: boolean
  kind?: ButtonKind
  onClick?: () => void
}

const Hide = styled.div`
  opacity: 0;
`

export const Button = ({
  children,
  size = 'm',
  isDisabled = false,
  isLoading = false,
  onClick,
  kind = 'primary',
  ...rest
}: ButtonProps) => {
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
