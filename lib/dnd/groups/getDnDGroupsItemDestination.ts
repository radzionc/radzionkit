import { Over } from '@dnd-kit/core'
import { DnDGroupsItemLocation } from './DnDGroupsItemLocation'
import { SortableData } from '@dnd-kit/sortable'

type Input = {
  item: Over
}

export const getDndGroupsItemDestination = <GroupId extends string>({
  item,
}: Input): DnDGroupsItemLocation<GroupId> => {
  const destinationItem = item.data.current

  if (destinationItem) {
    const { containerId, index } = (destinationItem as SortableData).sortable

    return {
      groupId: containerId as GroupId,
      index,
    }
  }

  return {
    groupId: item.id as GroupId,
    index: 0,
  }
}
