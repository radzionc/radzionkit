import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { DragHandle } from '@lib/ui/dnd/DragHandle'
import { GripVerticalIcon } from '@lib/ui/icons/GripVerticalIcon'
import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

export type ListItemDragHandleProps = ComponentProps<typeof DragHandle> & {
  isEnabled: boolean
}

const dragHandleWidth = 36

const Container = styled(DragHandle)<{ isEnabled: boolean }>`
  width: ${toSizeUnit(dragHandleWidth)};

  ${({ isEnabled }) =>
    !isEnabled &&
    css`
      pointer-events: none;
      visibility: hidden;
    `}

  @media (hover: hover) and (pointer: fine) {
    position: absolute;
    top: 0;
    left: -${toSizeUnit(dragHandleWidth)};
  }
`

export function ListItemDragHandle({
  isEnabled,
  ...props
}: ListItemDragHandleProps) {
  return (
    <Container isEnabled={isEnabled} {...props}>
      <GripVerticalIcon />
    </Container>
  )
}
