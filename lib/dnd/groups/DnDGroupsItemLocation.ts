import { haveEqualFields } from '@lib/utils/record/haveEqualFields'

export type DnDGroupsItemLocation<GroupId extends string> = {
  groupId: GroupId
  index: number
}

export const areEqualDnDGroupsItemLocations = <GroupId extends string>(
  one: DnDGroupsItemLocation<GroupId>,
  another: DnDGroupsItemLocation<GroupId>,
) => {
  return haveEqualFields(['groupId', 'index'], one, another)
}
