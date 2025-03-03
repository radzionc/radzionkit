import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import FocusLock from 'react-focus-lock'
import styled, { css } from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { vStack } from '../css/stack'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { toSizeUnit } from '../css/toSizeUnit'
import { useIsScreenWidthLessThan } from '../hooks/useIsScreenWidthLessThan'
import { getColor } from '../theme/getters'

import { modalConfig } from './config'

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

  border: 2px solid ${getColor('mistExtra')};
  overflow: hidden;
`

type ModalContainerProps = {
  targetWidth?: number
  placement?: ModalPlacement
  as?: ElementType
} & Omit<
  ComponentPropsWithoutRef<ElementType>,
  keyof ContainerProps | 'as' | 'width' | 'placement'
>

export function ModalContainer({
  targetWidth = 400,
  placement = 'center',
  as,
  ...props
}: ModalContainerProps) {
  const isFullScreen = useIsScreenWidthLessThan(
    targetWidth + modalConfig.minHorizontalFreeSpaceForMist,
  )

  return (
    <Container
      returnFocus
      as={as}
      width={isFullScreen ? undefined : targetWidth}
      placement={placement}
      {...props}
    />
  )
}
