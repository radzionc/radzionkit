import { DragHandle } from '@lib/ui/dnd/DragHandle'
import { HStack } from '@lib/ui/css/stack'
import { IsActiveProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

export const DraggableItemContainer = styled(HStack)<IsActiveProp>`
  width: 100%;
  gap: 4px;
  align-items: start;
  background: ${getColor('background')};
  position: relative;
  @media (hover: hover) and (pointer: fine) {
    gap: 0;
    &:not(:focus-within) > ${DragHandle} {
      opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    }
    &:hover ${DragHandle} {
      opacity: 1;
    }
  }
`
