import { ComponentWithChildrenProps } from 'lib/shared/props'
import styled, { css, keyframes } from 'styled-components'
import { defaultTransitionCSS } from 'lib/ui/animations/transitions'
import { centerContentCSS } from 'lib/ui/utils/centerContentCSS'
import { getHorizontalPaddingCSS } from 'lib/ui/utils/getHorizontalPaddingCSS'
import { Spinner } from 'lib/ui/Spinner'

import { getCSSUnit } from 'lib/ui/utils/getCSSUnit'
import { UnstyledButton } from '../UnstyledButton'
import { useState } from 'react'
import {
  useHover,
  useFloating,
  useInteractions,
  offset,
  shift,
  useTransitionStyles,
} from '@floating-ui/react'

export const rectButtonSizes = ['xs', 's', 'm', 'l', 'xl'] as const

type RectButtonSize = (typeof rectButtonSizes)[number]

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentWithChildrenProps & {
    as?: 'button' | 'div'
    size?: RectButtonSize
    isDisabled?: boolean | string
    isLoading?: boolean
    isRounded?: boolean
  }

interface ContainerProps {
  size: RectButtonSize
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
}

const Container = styled(UnstyledButton)<ContainerProps>`
  color: ${({ theme }) => theme.colors.text.toCssValue()};
  ${defaultTransitionCSS};

  ${centerContentCSS};

  border-radius: ${({ isRounded }) => getCSSUnit(isRounded ? 100 : 8)};

  ${({ size }) =>
    ({
      xs: css`
        ${getHorizontalPaddingCSS(8)}
        height: 28px;
        font-size: 14px;
      `,
      s: css`
        ${getHorizontalPaddingCSS(16)}
        height: 36px;
        font-size: 14px;
      `,
      m: css`
        ${getHorizontalPaddingCSS(20)}
        height: 40px;
        font-size: 16px;
      `,
      l: css`
        ${getHorizontalPaddingCSS(20)}
        height: 48px;
        font-size: 16px;
      `,
      xl: css`
        ${getHorizontalPaddingCSS(40)}
        height: 56px;
        font-size: 18px;
      `,
    }[size])};

  font-weight: 500;

  cursor: ${({ isDisabled, isLoading }) =>
    isDisabled ? 'initial' : isLoading ? 'wait' : 'pointer'};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.8;
    `};
`

const TooltipContainer = styled.div`
  border-radius: 4px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.contrast.toCssValue()};
  color: ${({ theme }) => theme.colors.background.toCssValue()};
  font-size: 14px;
`

export const RectButton = ({
  children,
  size = 'm',
  isDisabled = false,
  isLoading = false,
  onClick,
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    strategy: 'fixed',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), shift()],
  })

  const { styles } = useTransitionStyles(context, {
    duration: 200,
    initial: {
      opacity: 0,
    },
  })

  const hover = useHover(context, {
    enabled: typeof isDisabled === 'string',
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <>
      <Container
        ref={refs.setReference}
        {...getReferenceProps()}
        size={size}
        isDisabled={!!isDisabled}
        isLoading={isLoading}
        onClick={isDisabled || isLoading ? undefined : onClick}
        {...rest}
      >
        {isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <>{children}</>
        )}
      </Container>
      {isOpen && (
        <TooltipContainer
          ref={refs.setFloating}
          style={{
            ...styles,
            ...floatingStyles,
          }}
          {...getFloatingProps()}
        >
          {isDisabled}
        </TooltipContainer>
      )}
    </>
  )
}
