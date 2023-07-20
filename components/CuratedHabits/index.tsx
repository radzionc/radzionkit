import { capitalizeFirstLetter } from "lib/shared/utils/capitalizeFirstLetter"
import { getTreeNode, getTreeValues } from "lib/shared/utils/tree"
import { withoutDuplicates } from "lib/shared/utils/withoutDuplicates"
import { HStack, VStack } from "lib/ui/Stack"
import { TreeFilter } from "lib/ui/tree/TreeFilter"
import { useState, useMemo } from "react"
import styled from "styled-components"
import { HabitTreeNode, habitTree } from "./data/habitTree"
import { habitRecord } from "./data/habits"
import { Text } from "lib/ui/Text"
import { HabitItem } from "./HabitItem"

const Container = styled(HStack)`
  width: 100%;
  flex-wrap: wrap;
  gap: 40px;
  align-items: start;
`

const Content = styled(VStack)`
  gap: 20px;
  flex: 1;
`

const FilterWrapper = styled.div`
  position: sticky;
  top: 0;
`

// turn into tree helper
const getCategoriesColors = (
  { value, children }: HabitTreeNode,
  parentColor?: number
): Record<string, number | undefined> => {
  const color = value.color ?? parentColor

  return {
    [value.id]: color,
    ...children.reduce(
      (acc, child) => ({
        ...acc,
        ...getCategoriesColors(child, color),
      }),
      {}
    ),
  }
}

const defaultColor = 3

export const CuratedHabits = () => {
  const [path, setPath] = useState<number[]>([])

  const node = getTreeNode(habitTree, path)

  const nodes = useMemo(() => getTreeValues(habitTree), [])
  const categoryColorRecord = useMemo(() => getCategoriesColors(habitTree), [])

  const habits = withoutDuplicates(
    getTreeValues(node).flatMap((value) => value.habits || [])
  )
    .map((id) => ({
      id,
      ...habitRecord[id],
    }))
    .map((habit) => ({
      ...habit,
      tags: nodes
        .filter((value) => value.habits?.includes(habit.id))
        .map((value) => ({
          name: value.id,
          color: categoryColorRecord[value.id] ?? defaultColor,
        })),
    }))

  return (
    <Container>
      <FilterWrapper>
        <TreeFilter
          tree={habitTree}
          renderName={(value) => capitalizeFirstLetter(value.id)}
          value={path}
          onChange={setPath}
        />
      </FilterWrapper>
      <Content>
        <Text weight="bold" size={24}>
          {capitalizeFirstLetter(node.value.id)} habits{" "}
          <Text as="span" color="supporting">
            ({habits.length})
          </Text>
        </Text>
        {habits.map((habit) => (
          <HabitItem {...habit} key={habit.id} />
        ))}
      </Content>
    </Container>
  )
}
