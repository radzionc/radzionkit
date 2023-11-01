import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@reactkit/ui/ui/TabNavigation'
import { capitalizeFirstLetter } from '@reactkit/utils/capitalizeFirstLetter'
import { HStack, VStack } from '@reactkit/ui/layout/Stack'
import {
  CountryCode,
  countryNameRecord,
} from '@reactkit/utils/countryNameRecord'
import { Match } from '@reactkit/ui/base/Match'
import { Text } from '@reactkit/ui/text'
import { CountryFlag } from '@reactkit/ui/country/CountryFlag'
import { CountryFlagEmoji } from '@reactkit/ui/country/CountryFlagEmoji'
import { makeDemoPage } from 'layout/makeDemoPage'

const views = ['svg', 'emoji'] as const
type View = (typeof views)[number]

export default makeDemoPage(() => {
  const [activeView, setActiveView] = useState<View>('svg')

  return (
    <DemoPage youtubeVideoId="s3ve27fqORk" title="Country flag">
      <VStack fullWidth gap={40}>
        <TabNavigation
          views={views}
          getViewName={capitalizeFirstLetter}
          activeView={activeView}
          onSelect={setActiveView}
          groupName="flags"
        />
        <HStack alignItems="center" wrap="wrap" gap={20}>
          {Object.keys(countryNameRecord).map((code) => (
            <Match
              key={code}
              value={activeView}
              emoji={() => (
                <Text size={24} color="contrast">
                  <CountryFlagEmoji code={code as CountryCode} />
                </Text>
              )}
              svg={() => (
                <CountryFlag code={code as CountryCode} style={{ width: 24 }} />
              )}
            />
          ))}
        </HStack>
      </VStack>
    </DemoPage>
  )
})
