import { ReactNode, useCallback, useId, useState } from 'react'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragEndEvent,
  DragOverlay,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { DnDItem } from './DnDItem'
import { DnDItemStatus } from './DnDItemStatus'
import { ComponentWithChildrenProps } from '@lib/ui/props'

export type ItemChangeParams = {
  index: number
}

type RednerListProps = Record<string, any> & ComponentWithChildrenProps

type RenderListParams = {
  props: RednerListProps
}

type RenderItemParams<Item> = {
  item: Item
  draggableProps?: Record<string, any>
  dragHandleProps?: Record<string, any>
  status: DnDItemStatus
}

export type DnDListProps<ItemId extends UniqueIdentifier, Item> = {
  items: Item[]
  getItemId: (item: Item) => ItemId
  onChange: (itemId: ItemId, params: ItemChangeParams) => void
  renderList: (params: RenderListParams) => ReactNode
  renderItem: (params: RenderItemParams<Item>) => ReactNode
}

export function DnDList<ItemId extends UniqueIdentifier, Item>({
  items,
  getItemId,
  onChange,
  renderItem,
  renderList,
}: DnDListProps<ItemId, Item>) {
  const droppableId = useId()
  const [activeItemId, setActiveItemId] = useState<ItemId | null>(null)

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 0.01,
    },
  })

  const sensors = useSensors(pointerSensor)

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const itemId = shouldBePresent(activeItemId)

      setActiveItemId(null)

      if (!over || active.id === over.id) {
        return
      }

      const index = items.findIndex((item) => getItemId(item) === over.id)

      onChange(itemId, { index })
    },
    [activeItemId, getItemId, items, onChange],
  )

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveItemId(active.id as ItemId)}
      onDragEnd={handleDragEnd}
      onDragCancel={() => {
        setActiveItemId(null)
      }}
    >
      <SortableContext
        items={items.map(getItemId)}
        strategy={verticalListSortingStrategy}
      >
        {renderList({
          props: {
            'data-droppable-id': droppableId,
            children: (
              <>
                {items.map((item) => {
                  const key = getItemId(item)
                  return (
                    <DnDItem
                      key={key}
                      id={key}
                      render={(params) =>
                        renderItem({
                          item,
                          ...params,

                          status: activeItemId === key ? 'placeholder' : 'idle',
                        })
                      }
                    />
                  )
                })}
              </>
            ),
          },
        })}
        <DragOverlay>
          {activeItemId
            ? renderItem({
                item: shouldBePresent(
                  items.find((item) => getItemId(item) === activeItemId),
                ),
                status: 'overlay',
              })
            : null}
        </DragOverlay>
      </SortableContext>
    </DndContext>
  )
}
