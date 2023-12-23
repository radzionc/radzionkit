import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@radzionkit/ui/navigation/TabNavigation'
import { capitalizeFirstLetter } from '@radzionkit/utils/capitalizeFirstLetter'
import { HStack, VStack } from '@radzionkit/ui/layout/Stack'
import { countryCodes, countryNameRecord } from '@radzionkit/utils/countries'
import { Match } from '@radzionkit/ui/base/Match'
import { Text } from '@radzionkit/ui/text'
import { CountryFlag } from '@radzionkit/ui/countries/flags/CountryFlag'
import { CountryFlagEmoji } from '@radzionkit/ui/countries/CountryFlagEmoji'
import { makeDemoPage } from 'layout/makeDemoPage'
import { UniformColumnGrid } from '@radzionkit/ui/layout/UniformColumnGrid'
import { IconWrapper } from '@radzionkit/ui/icons/IconWrapper'

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
        <UniformColumnGrid childrenWidth={240} gap={20}>
          {countryCodes.map((code) => (
            <HStack key={code} alignItems="center" gap={12}>
              <Text height="small" size={24} color="contrast">
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
