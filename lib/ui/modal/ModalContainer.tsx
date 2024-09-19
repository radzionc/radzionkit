import React, { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { getColor } from '../theme/getters'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { toSizeUnit } from '../css/toSizeUnit'
import { borderRadius } from '../css/borderRadius'
import { vStack } from '../css/stack'
import { useIsScreenWidthLessThan } from '../hooks/useIsScreenWidthLessThan'
import { modalConfig } from './config'
import FocusLock from 'react-focus-lock'

export type ModalPlacement = 'top' | 'center'

type ContainerProps = {
  width?: number
  placement: ModalPlacement
}

const offset = 40

const Container = styled(FocusLock)<ContainerProps>`
  ${vStack()};

  max-height: 100%;
  background: ${getColor('background')};

  ${({ width, placement }) =>
    width
      ? css`
          width: ${toSizeUnit(width)};
          ${borderRadius.m};
          max-height: calc(100% - ${toSizeUnit(offset * 2)});
          ${placement === 'top' &&
          css`
            align-self: start;
            margin-top: ${toSizeUnit(offset)};
          `}
        `
      : takeWholeSpace};

  border: 2px solid ${getColor('textShy')};
  overflow: hidden;
`

type ModalContainerProps<T extends ElementType = 'div'> = {
  targetWidth?: number
  placement?: ModalPlacement
  as?: T
} & Omit<
  ComponentPropsWithoutRef<T>,
  keyof ContainerProps | 'as' | 'width' | 'placement'
>

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

export const ModalContainer = forwardRef(
  <T extends ElementType = 'div'>(
    {
      targetWidth = 400,
      placement = 'center',
      as,
      ...props
    }: ModalContainerProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const isFullScreen = useIsScreenWidthLessThan(
      targetWidth + modalConfig.minHorizontalFreeSpaceForMist,
    )

    return (
      <Container
        returnFocus
        as={as}
        ref={ref}
        width={isFullScreen ? undefined : targetWidth}
        placement={placement}
        {...props}
      />
    )
  },
)
