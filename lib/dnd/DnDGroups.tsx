import { order } from '@lib/utils/array/order'
import { getNewOrder } from '@lib/utils/order/getNewOrder'
import { ReactNode, useCallback, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd'
import { getRecordKeys } from '@lib/utils/record/getRecordKeys'

export type ItemChangeParams<K> = {
  order: number
  groupId: K
}

type RenderGroupParams<K> = {
  groupId: K
  content: ReactNode
  containerProps?: Record<string, any>
  isDraggingOver: boolean
}

type RenderItemParams<I> = {
  item: I
  draggableProps?: Record<string, any>
  dragHandleProps?: Record<string, any> | null
  isDragging?: boolean
  isDraggingEnabled: boolean
}

export type DnDGroupsProps<K extends string, I> = {
  groups: Record<K, I[]>
  getGroupOrder: (group: K) => number
  getItemOrder: (item: I) => number
  getItemId: (item: I) => string
  onChange: (itemId: string, params: ItemChangeParams<K>) => void
  renderGroup: (params: RenderGroupParams<K>) => ReactNode
  renderItem: (params: RenderItemParams<I>) => ReactNode
}

export function DnDGroups<K extends string, I>({
  groups,
  getItemOrder,
  getItemId,
  onChange,
  renderGroup,
  renderItem,
  getGroupOrder,
}: DnDGroupsProps<K, I>) {
  const [currentItemId, setCurrentItemId] = useState<string | null>(null)

  const handleDragEnd: OnDragEndResponder = useCallback(
    ({ destination, source, draggableId }) => {
      setCurrentItemId(null)
      if (!destination) {
        return
      }

      const isSameGroup = destination.droppableId === source.droppableId

      if (isSameGroup && destination.index === source.index) {
        return
      }

      const groupId = destination.droppableId as K

      const items = order(groups[groupId] || [], getItemOrder, 'asc')

      onChange(draggableId, {
        order: getNewOrder({
          orders: items.map(getItemOrder),
          sourceIndex: isSameGroup ? source.index : null,
          destinationIndex: destination.index,
        }),
        groupId,
      })
    },
    [getItemOrder, groups, onChange],
  )

  const groupKeys = order(getRecordKeys(groups), getGroupOrder, 'asc')

  return (
    <DragDropContext
      onDragStart={({ draggableId }) => setCurrentItemId(draggableId)}
      onDragEnd={handleDragEnd}
    >
      {groupKeys.map((groupId) => {
        const items = order(groups[groupId] || [], getItemOrder, 'asc')

        return (
          <Droppable key={groupId} droppableId={groupId}>
            {(provided, snapshot) => {
              const { isDraggingOver } = snapshot
              return (
                <>
                  {renderGroup({
                    groupId,
                    isDraggingOver,
                    containerProps: {
                      ...provided.droppableProps,
                      ref: provided.innerRef,
                    },
                    content: (
                      <>
                        {items.map((item, index) => {
                          const key = getItemId(item)
                          return (
                            <Draggable
                              key={key}
                              index={index}
                              draggableId={key}
                            >
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
                                    isDraggingEnabled:
                                      isDragging || !currentItemId,
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
        )
      })}
    </DragDropContext>
  )
}
