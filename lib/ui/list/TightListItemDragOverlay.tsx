import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../props'
import { borderRadius } from '../css/borderRadius'
import { absoluteOutline } from '../css/absoluteOutline'
import { tightListItemConfig } from './tightListItemConfig'
import { getColor } from '../theme/getters'

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

export const TightListItemDragOverlay = ({
  children,
}: ComponentWithChildrenProps) => {
  return (
    <Container>
      <Highlight />
      {children}
    </Container>
  )
}
