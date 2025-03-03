import { countryCodes, countryNameRecord } from '@lib/countries'
import { CountryFlagEmoji } from '@lib/countries-ui/CountryFlagEmoji'
import { CountryFlag } from '@lib/countries-ui/flags/CountryFlag'
import { Match } from '@lib/ui/base/Match'
import { HStack, VStack } from '@lib/ui/css/stack'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { TabNavigation } from '@lib/ui/navigation/TabNavigation'
import { Text } from '@lib/ui/text'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useState } from 'react'

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
