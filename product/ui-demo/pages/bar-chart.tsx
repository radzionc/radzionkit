import { BarChart } from '@lib/ui/charts/BarChart'
import { Panel } from '@lib/ui/css/panel'
import { HStack, VStack } from '@lib/ui/css/stack'
import { TabNavigation } from '@lib/ui/navigation/TabNavigation'
import { Text } from '@lib/ui/text'
import { LabeledValue } from '@lib/ui/text/LabeledValue'
import { sum } from '@lib/utils/array/sum'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

const statsViews = ['days', 'weeks', 'months'] as const
type StatsView = (typeof statsViews)[number]

interface StatsViewDataPoint {
  value: number
  label: string
  isCurrent?: boolean
}

const viewData: Record<StatsView, StatsViewDataPoint[]> = {
  days: [
    {
      value: 4335,
      label: 'Mon',
    },
    {
      value: 5213,
      label: 'Tue',
    },
    {
      value: 4399,
      label: 'Wed',
    },
    {
      value: 4360,
      label: 'Thu',
    },
    {
      value: 5365,
      label: 'Fri',
    },
    {
      value: 5000,
      label: 'Sat',
    },
    {
      isCurrent: true,
      value: 4800,
      label: 'Sun',
    },
  ],
  weeks: [
    {
      label: 'Week #16',
      value: 42120,
    },
    {
      label: 'Week #17',
      value: 34235,
    },
    {
      label: 'Week #18',
      value: 24097,
    },
    {
      label: 'Week #19',
      value: 38655,
    },
    {
      isCurrent: true,
      label: 'This week',
      value: 23700,
    },
  ],
  months: [
    {
      label: 'Jan',
      value: 82330,
    },
    {
      label: 'Feb',
      value: 72330,
    },
    {
      label: 'Mar',
      value: 71110,
    },
    {
      label: 'Apr',
      value: 90000,
    },
    {
      isCurrent: true,
      label: 'May',
      value: 62330,
    },
  ],
}

export default makeDemoPage(() => {
  const [view, setView] = useState<StatsView>('weeks')

  const data = viewData[view]

  const { colors } = useTheme()

  const previousAvg = useMemo(() => {
    const applicableItems = data.filter((data) => data.value).slice(0, -1)
    if (!applicableItems.length) return '-'

    return formatDuration(
      sum(applicableItems.map((data) => data.value)) / applicableItems.length,
      's',
    )
  }, [data])

  return (
    <DemoPage title="Bar chart" youtubeVideoId="z8YB2jiJG_4">
      <Panel style={{ width: 520 }} kind="secondary">
        <VStack gap={28}>
          <HStack
            justifyContent="space-between"
            fullWidth
            alignItems="center"
            gap={16}
            wrap="wrap"
          >
            <TabNavigation
              views={statsViews}
              getViewName={capitalizeFirstLetter}
              activeView={view}
              onSelect={setView}
            />
            <LabeledValue name="Previous avg">
              <Text weight="500" as="div">
                {previousAvg}
              </Text>
            </LabeledValue>
          </HStack>

          <BarChart
            height={160}
            items={data.map(({ value, label, isCurrent }) => {
              return {
                value,
                label: (
                  <Text color={isCurrent ? 'contrast' : undefined}>
                    {label}
                  </Text>
                ),
                color: isCurrent ? colors.primary : colors.mist,

                renderValue:
                  value > 0
                    ? () => (
                        <Text color={isCurrent ? 'contrast' : undefined}>
                          {formatDuration(value, 's')}
                        </Text>
                      )
                    : undefined,
              }
            })}
          />
        </VStack>
      </Panel>
    </DemoPage>
  )
})
