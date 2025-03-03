import styled from 'styled-components'

import { absoluteOutline } from '../css/absoluteOutline'
import { borderRadius } from '../css/borderRadius'
import { ChildrenProp } from '../props'
import { getColor } from '../theme/getters'

import { tightListItemConfig } from './tightListItemConfig'

const Container = styled.div`
  position: relative;
  cursor: grabbing;
  user-select: none;
`

const Highlight = styled.div`
  position: absolute;
  ${borderRadius.s};
  ${absoluteOutline(tightListItemConfig.horizontalOffset, 0)}

  background: ${getColor('background')};
  z-index: -1;
  ${borderRadius.s};
  border: 1px solid ${getColor('mistExtra')};
`

export const TightListItemDragOverlay = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <Highlight />
      {children}
    </Container>
  )
}
