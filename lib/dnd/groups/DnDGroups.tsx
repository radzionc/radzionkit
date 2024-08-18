import { getNewOrder } from '@lib/utils/order/getNewOrder'
import { ReactNode, useCallback, useState } from 'react'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragEndEvent,
  DragOverlay,
  MeasuringStrategy,
  closestCorners,
} from '@dnd-kit/core'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { DnDItem } from '../DnDItem'
import { DnDGroup } from './DnDGroup'
import { getDndGroupsItemDestination } from './getDnDGroupsItemDestination'
import { getDndGroupsItemSource } from './getDnDGroupsItemSource'
import {
  areEqualDnDGroupsItemLocations,
  DnDGroupsItemLocation,
} from './DnDGroupsItemLocation'
import { Entry } from '@lib/utils/entities/Entry'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { DnDItemStatus } from '../DnDItemStatus'
import { order } from '@lib/utils/array/order'

type RenderGroupProps = Record<string, any> & ComponentWithChildrenProps

type RenderGroupParams<GroupId extends string> = {
  groupId: GroupId
  props: RenderGroupProps
  isDraggingOver: boolean
}

type RenderItemParams<Item> = {
  item: Item
  draggableProps?: Record<string, any>
  dragHandleProps?: Record<string, any>
  status: DnDItemStatus
}

export type DnDGroupsProps<
  GroupId extends string,
  ItemId extends UniqueIdentifier,
  Item,
> = {
  groups: Entry<GroupId, Item[]>[]
  getItemId: (item: Item) => ItemId
  onChange: (itemId: ItemId, params: DnDGroupsItemLocation<GroupId>) => void
  renderGroup: (params: RenderGroupParams<GroupId>) => ReactNode
  renderItem: (params: RenderItemParams<Item>) => ReactNode
}

type ActiveDrag<
  GroupId extends string,
  ItemId extends UniqueIdentifier,
  Item,
> = {
  id: ItemId
  initialLocation: DnDGroupsItemLocation<GroupId>
  groups: Entry<GroupId, Item[]>[]
}

export function DnDGroups<
  GroupId extends string,
  ItemId extends UniqueIdentifier,
  Item,
>({
  groups,
  getItemId,
  onChange,
  renderGroup,
  renderItem,
}: DnDGroupsProps<GroupId, ItemId, Item>) {
  const [activeDrag, setActiveDrag] = useState<ActiveDrag<
    GroupId,
    ItemId,
    Item
  > | null>(null)

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 0.01,
    },
  })

  const sensors = useSensors(pointerSensor)

  const getItem = useCallback(
    (id: ItemId) => {
      return shouldBePresent(
        groups
          .flatMap(({ value }) => value)
          .find((item) => getItemId(item) === id),
      )
    },
    [getItemId, groups],
  )

  const handleDragEnd = useCallback(
    ({ over }: DragEndEvent) => {
      if (!activeDrag) {
        return
      }
      const { id, initialLocation } = activeDrag

      setActiveDrag(null)

      if (!over) {
        return
      }

      const destination = getDndGroupsItemDestination<GroupId>({
        item: over,
      })

      if (areEqualDnDGroupsItemLocations(initialLocation, destination)) {
        return
      }

      onChange(id, destination)
    },
    [activeDrag, onChange],
  )

  const handleDragOver = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (!over) {
        return
      }

      const source = getDndGroupsItemSource<GroupId>({
        item: active,
      })

      const destination = getDndGroupsItemDestination<GroupId>({
        item: over,
      })

      if (source.groupId === destination.groupId) {
        return
      }

      setActiveDrag((prev) => {
        const { groups, ...rest } = shouldBePresent(prev)
        const { id } = rest
        const newGroups = groups.map((group) => {
          const { key, value } = group

          if (key === source.groupId) {
            return {
              key,
              value: value.filter((item) => getItemId(item) !== active.id),
            }
          }

          if (key === destination.groupId) {
            const itemOrderPairs = value.map(
              (item, index) => [item, index] as const,
            )

            itemOrderPairs.push([
              getItem(id),
              getNewOrder({
                orders: itemOrderPairs.map(([, order]) => order),
                destinationIndex: destination.index,
                sourceIndex: null,
              }),
            ])

            return {
              key,
              value: order(itemOrderPairs, ([, order]) => order, 'asc').map(
                ([item]) => item,
              ),
            }
          }

          return group
        })

        return {
          ...rest,
          groups: newGroups,
        }
      })
    },
    [getItem, getItemId],
  )

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActiveDrag({
          id: active.id as ItemId,
          groups,
          initialLocation: getDndGroupsItemSource<GroupId>({
            item: active,
          }),
        })
      }}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragCancel={() => {
        setActiveDrag(null)
      }}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always,
        },
      }}
      collisionDetection={closestCorners}
    >
      {(activeDrag ? activeDrag.groups : groups).map(
        ({ key: groupId, value: items }) => {
          return (
            <DnDGroup
              key={groupId}
              id={groupId}
              itemIds={items.map(getItemId)}
              render={({ props, isDraggingOver }) =>
                renderGroup({
                  groupId,
                  isDraggingOver,
                  props: {
                    ...props,
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
                                  status:
                                    activeDrag?.id === key
                                      ? 'placeholder'
                                      : 'idle',
                                })
                              }
                            />
                          )
                        })}
                      </>
                    ),
                  },
                })
              }
            />
          )
        },
      )}

      <DragOverlay>
        {activeDrag
          ? renderItem({
              item: getItem(activeDrag.id),
              status: 'overlay',
            })
          : null}
      </DragOverlay>
    </DndContext>
  )
}
