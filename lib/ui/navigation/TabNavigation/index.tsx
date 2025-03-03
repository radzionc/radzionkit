import { HStack } from '@lib/ui/css/stack'
import { useId } from 'react'
import styled from 'styled-components'

import { hideScrollbars } from '../../css/hideScrollbars'

import { TabNavigationItem } from './TabNavigationItem'

interface TabNavigationProps<T extends string | number | symbol> {
  views: readonly T[]
  getViewName: (view: T) => string
  activeView: T
  onSelect: (option: T) => void
  className?: string
  style?: React.CSSProperties
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
  className,
  style,
}: TabNavigationProps<T>) {
  const groupName = useId()
  return (
    <Container style={style} className={className}>
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
