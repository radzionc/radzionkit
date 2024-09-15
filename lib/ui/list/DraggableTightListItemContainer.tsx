import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  ComponentWithChildrenProps,
  DraggingAwareComponentProps,
} from '../props'
import { borderRadius } from '../css/borderRadius'
import { absoluteOutline } from '../css/absoluteOutline'
import { tightListItemConfig } from './tightListItemConfig'
import { getColor } from '../theme/getters'
import { ComponentProps } from 'react'
import { Wrap } from '../base/Wrap'

const Container = styled.div`
  position: relative;
`

const Highlight = styled.div`
  position: absolute;
  ${borderRadius.s};
  ${absoluteOutline(tightListItemConfig.horizontalOffset, 0)}

  background: ${getColor('mist')};
  z-index: -1;
`

const Content = styled.div`
  opacity: 0.4;
`

type DraggableTightListItemContainerProps = ComponentWithChildrenProps &
  ComponentProps<typeof Container> &
  DraggingAwareComponentProps

export const DraggableTightListItemContainer = forwardRef<
  HTMLDivElement,
  DraggableTightListItemContainerProps
>(({ children, isDragging, ...rest }, ref) => {
  return (
    <Container ref={ref} {...rest}>
      {isDragging && <Highlight />}
      <Wrap
        wrap={
          isDragging ? (children) => <Content>{children}</Content> : undefined
        }
      >
        {children}
      </Wrap>
    </Container>
  )
})
