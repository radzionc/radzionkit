import styled from 'styled-components'
import { TabNavigationItem } from './TabNavigationItem'
import { HStack } from '../../layout/Stack'
import { hideScrollbars } from '../../css/hideScrollbars'

interface TabNavigationProps<T extends string | number | symbol> {
  views: readonly T[]
  getViewName: (view: T) => string
  activeView: T
  onSelect: (option: T) => void
  groupName: string
}

const Container = styled(HStack)`
  gap: 4px;
  position: relative;
  overflow-x: auto;
  ${hideScrollbars};
`

export function TabNavigation<T extends string | number | symbol>({
  views,
  getViewName,
  activeView,
  onSelect,
  groupName,
}: TabNavigationProps<T>) {
  return (
    <Container>
      {views.map((view) => {
        const name = getViewName(view)
        return (
          <TabNavigationItem
            groupName={groupName}
            isSelected={view === activeView}
            value={name}
            onSelect={() => onSelect(view)}
            key={name}
          >
            {name}
          </TabNavigationItem>
        )
      })}
    </Container>
  )
}
