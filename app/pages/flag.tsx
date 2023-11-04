import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@reactkit/ui/navigation/TabNavigation'
import { capitalizeFirstLetter } from '@reactkit/utils/capitalizeFirstLetter'
import { HStack, VStack } from '@reactkit/ui/layout/Stack'
import { countryCodes, countryNameRecord } from '@reactkit/utils/countries'
import { Match } from '@reactkit/ui/base/Match'
import { Text } from '@reactkit/ui/text'
import { CountryFlag } from '@reactkit/ui/countries/flags/CountryFlag'
import { CountryFlagEmoji } from '@reactkit/ui/countries/CountryFlagEmoji'
import { makeDemoPage } from 'layout/makeDemoPage'
import { SameWidthChildrenRow } from '@reactkit/ui/layout/SameWidthChildrenRow'

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
        <SameWidthChildrenRow childrenWidth={240} gap={20}>
          {countryCodes.map((code) => (
            <HStack key={code} alignItems="center" gap={12}>
              <Text size={24} color="contrast">
                <Match
                  value={activeView}
                  emoji={() => <CountryFlagEmoji code={code} />}
                  svg={() => (
                    <CountryFlag code={code} style={{ borderRadius: 4 }} />
                  )}
                />
              </Text>
              <Text size={14}>{countryNameRecord[code]}</Text>
            </HStack>
          ))}
        </SameWidthChildrenRow>
      </VStack>
    </DemoPage>
  )
})
