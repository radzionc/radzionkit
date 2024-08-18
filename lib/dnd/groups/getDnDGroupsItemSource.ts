import { Active } from '@dnd-kit/core'
import { DnDGroupsItemLocation } from './DnDGroupsItemLocation'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { SortableData } from '@dnd-kit/sortable'

type Input = {
  item: Active
}

export const getDndGroupsItemSource = <GroupId extends string>({
  item,
}: Input): DnDGroupsItemLocation<GroupId> => {
  const { containerId, index } = (
    shouldBePresent(item.data.current) as SortableData
  ).sortable

  return {
    groupId: containerId as GroupId,
    index,
  }
}
