import { UniqueIdentifier, useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { RenderProp } from '@lib/ui/props'
import { useMemo } from 'react'

type RenderParams = {
  props: Record<string, any>
  isDraggingOver: boolean
}

type DnDGroupProps<GroupId extends string, ItemId extends UniqueIdentifier> = {
  id: GroupId
  itemIds: ItemId[]
} & RenderProp<RenderParams>

export function DnDGroup<
  GroupId extends string,
  ItemId extends UniqueIdentifier,
>({ id, itemIds, render }: DnDGroupProps<GroupId, ItemId>) {
  const { setNodeRef, over } = useDroppable({
    id,
  })

  const isDraggingOver = useMemo(() => {
    if (!over) {
      return false
    }

    if (over.id === id) {
      return true
    }

    const destinationItem = over.data.current
    if (destinationItem && destinationItem.sortable.containerId === id) {
      return true
    }

    return false
  }, [id, over])

  return (
    <SortableContext
      id={id}
      items={itemIds}
      strategy={verticalListSortingStrategy}
    >
      {render({
        isDraggingOver,
        props: {
          'data-droppable-id': id,
          ref: setNodeRef,
        },
      })}
    </SortableContext>
  )
}
