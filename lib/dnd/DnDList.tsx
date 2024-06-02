import { getNewOrder } from '@lib/utils/order/getNewOrder'
import { ReactNode, useCallback, useId, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'

export type ItemChangeParams = {
  order: number
}

type RenderListParams = {
  content: ReactNode
  containerProps?: Record<string, any>
}

type RenderItemParams<I> = {
  item: I
  draggableProps?: Record<string, any>
  dragHandleProps?: Record<string, any> | null
  isDragging?: boolean
  isDraggingEnabled: boolean
}

export type DnDListProps<I> = {
  items: I[]
  getItemOrder: (item: I) => number
  getItemId: (item: I) => string
  onChange: (itemId: string, params: ItemChangeParams) => void
  renderList: (params: RenderListParams) => ReactNode
  renderItem: (params: RenderItemParams<I>) => ReactNode
}

export function DnDList<I>({
  items,
  getItemOrder,
  getItemId,
  onChange,
  renderItem,
  renderList,
}: DnDListProps<I>) {
  const droppableId = useId()
  const [currentItemId, setCurrentItemId] = useState<string | null>(null)

  const handleDragEnd: OnDragEndResponder = useCallback(
    ({ destination, source, draggableId }) => {
      setCurrentItemId(null)
      if (!destination) {
        return
      }

      if (destination.index === source.index) {
        return
      }

      onChange(draggableId, {
        order: getNewOrder({
          orders: items.map(getItemOrder),
          sourceIndex: source.index,
          destinationIndex: destination.index,
        }),
      })
    },
    [getItemOrder, items, onChange],
  )

  return (
    <DragDropContext
      onDragStart={({ draggableId }) => setCurrentItemId(draggableId)}
      onDragEnd={handleDragEnd}
    >
      <Droppable droppableId={droppableId}>
        {(provided) => {
          return (
            <>
              {renderList({
                containerProps: {
                  ...provided.droppableProps,
                  ref: provided.innerRef,
                },
                content: (
                  <>
                    {items.map((item, index) => {
                      const key = getItemId(item)
                      return (
                        <Draggable key={key} index={index} draggableId={key}>
                          {(
                            { dragHandleProps, draggableProps, innerRef },
                            { isDragging },
                          ) => (
                            <>
                              {renderItem({
                                item,
                                draggableProps: {
                                  ...draggableProps,
                                  ref: innerRef,
                                },
                                dragHandleProps,
                                isDraggingEnabled: isDragging || !currentItemId,
                                isDragging,
                              })}
                            </>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </>
                ),
              })}
            </>
          )
        }}
      </Droppable>
    </DragDropContext>
  )
}
