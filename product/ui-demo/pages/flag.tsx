import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@lib/ui/navigation/TabNavigation'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { HStack, VStack } from '@lib/ui/css/stack'
import { countryCodes, countryNameRecord } from '@lib/countries'
import { Match } from '@lib/ui/base/Match'
import { Text } from '@lib/ui/text'
import { CountryFlag } from '@lib/ui/countries/flags/CountryFlag'
import { CountryFlagEmoji } from '@lib/ui/countries/CountryFlagEmoji'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'

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
        />
        <UniformColumnGrid childrenWidth={240} gap={20}>
          {countryCodes.map((code) => (
            <HStack key={code} alignItems="center" gap={12}>
              <Text height="s" size={24} color="contrast">
                <Match
                  value={activeView}
                  emoji={() => <CountryFlagEmoji code={code} />}
                  svg={() => (
                    <IconWrapper style={{ borderRadius: 4 }}>
                      <CountryFlag code={code} />
                    </IconWrapper>
                  )}
                />
              </Text>
              <Text size={14}>{countryNameRecord[code]}</Text>
            </HStack>
          ))}
        </UniformColumnGrid>
      </VStack>
    </DemoPage>
  )
})
