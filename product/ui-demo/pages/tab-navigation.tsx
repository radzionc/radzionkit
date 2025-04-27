import { VStack } from '@lib/ui/css/stack'
import { TabNavigation } from '@lib/ui/navigation/TabNavigation'
import { Text } from '@lib/ui/text'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useState } from 'react'

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

export default makeDemoPage(() => {
  const [activeView, setActiveView] = useState<View>('Overview')

  return (
    <DemoPage youtubeVideoId="dDuWfi_Hvis" title="Tab Navigation">
      <VStack fullWidth gap={40}>
        <TabNavigation<View>
          views={views}
          getViewName={capitalizeFirstLetter}
          activeView={activeView}
          onSelect={setActiveView}
        />

        <Text size={20} weight="600">
          {activeView} view
        </Text>
      </VStack>
    </DemoPage>
  )
})
