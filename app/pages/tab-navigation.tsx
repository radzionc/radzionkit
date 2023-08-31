import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@reactkit/ui/ui/TabNavigation'
import { capitalizeFirstLetter } from '@reactkit/utils/capitalizeFirstLetter'
import { VStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'

const views = [
  'Overview',
  'Projects',
  'Habits',
  'Goals',
  'Tasks',
  'Settings',
  'Account',
  'Help',
] as const
type View = (typeof views)[number]

const TabNavigationPage: NextPage = () => {
  const [activeView, setActiveView] = useState<View>('Overview')

  return (
    <DemoPage youtubeVideoId="dDuWfi_Hvis" title="Tab Navigation">
      <VStack fullWidth gap={40}>
        <TabNavigation
          views={views}
          getViewName={capitalizeFirstLetter}
          activeView={activeView}
          onSelect={setActiveView}
          groupName="tab-navigation"
        />

        <Text size={20} weight="bold">
          {activeView} view
        </Text>
      </VStack>
    </DemoPage>
  )
}

export default TabNavigationPage
