import { UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { RenderProp } from '@lib/ui/props'

type RenderParams = {
  draggableProps: Record<string, any>
  dragHandleProps: Record<string, any>
}

type DnDItemProps<ItemId extends UniqueIdentifier> = {
  id: ItemId
} & RenderProp<RenderParams>

export function DnDItem<ItemId extends UniqueIdentifier>({
  id,
  render,
}: DnDItemProps<ItemId>) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  }

  return render({
    draggableProps: {
      ...attributes,
      ref: setNodeRef,
      style,
    },
    dragHandleProps: {
      ...listeners,
    },
  })
}
