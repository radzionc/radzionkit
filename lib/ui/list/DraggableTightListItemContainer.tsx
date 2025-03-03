import { ComponentProps } from 'react'
import styled from 'styled-components'

import { Wrap } from '../base/Wrap'
import { absoluteOutline } from '../css/absoluteOutline'
import { borderRadius } from '../css/borderRadius'
import { ChildrenProp, IsDraggingProp } from '../props'
import { getColor } from '../theme/getters'

import { tightListItemConfig } from './tightListItemConfig'

const Container = styled.div`
  position: relative;
  outline: none;
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

type DraggableTightListItemContainerProps = ChildrenProp &
  ComponentProps<typeof Container> &
  IsDraggingProp

export function DraggableTightListItemContainer({
  children,
  isDragging,
  ...rest
}: DraggableTightListItemContainerProps) {
  return (
    <Container {...rest}>
      {isDragging && <Highlight />}
      <Wrap
        wrap={
          isDragging
            ? (wrappedChildren) => <Content>{wrappedChildren}</Content>
            : undefined
        }
      >
        {children}
      </Wrap>
    </Container>
  )
}
