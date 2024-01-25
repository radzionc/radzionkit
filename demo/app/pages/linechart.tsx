import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'
import styled, { useTheme } from 'styled-components'
import { useState } from 'react'
import { normalize } from '@lib/utils/math/normalize'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { dataVerticalPadding } from '@lib/ui/charts/utils/dataVerticalPadding'
import { LineChartItemInfo } from '@lib/ui/charts/LineChart/LineChartItemInfo'
import { VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { format } from 'date-fns'
import { LineChart } from '@lib/ui/charts/LineChart'
import { LineChartPositionTracker } from '@lib/ui/charts/LineChart/LineChartPositionTracker'
import { ChartXAxis } from '@lib/ui/charts/ChartXAxis'
import { bitcoinPriceTimeseries } from '../data/bitcoinPriceTimeseries'
import { makeDemoPage } from '../layout/makeDemoPage'
import { DemoPage } from '../components/DemoPage'
import { formatAmount } from '@lib/utils/formatAmount'

const Container = styled(VStack)`
  gap: 4px;
  width: 100%;
`

const chartConfig = {
  chartHeight: 240,
  itemInfoExpectedHeight: 24,
  itemInfoExpectedWidth: 120,
  expectedLabelWidth: 58,
  labelsMinDistance: 20,
}

const labelMinHeight = 18

const data = dataVerticalPadding(
  normalize(bitcoinPriceTimeseries.map((item) => item.price)),
  {
    top: 0.2,
    bottom: 0.2,
  },
)

export default makeDemoPage(() => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)

  const { colors } = useTheme()
  const color = colors.primary

  return (
    <DemoPage title="Line Chart">
      <ElementSizeAware
        render={({ setElement, size }) => {
          return (
            <Container ref={setElement}>
              {size && (
                <>
                  <LineChartItemInfo
                    itemExpectedHeight={chartConfig.itemInfoExpectedHeight}
                    itemExpectedWidth={chartConfig.itemInfoExpectedWidth}
                    containerWidth={size.width}
                    data={data}
                    itemIndex={selectedPoint}
                    render={(index) => {
                      const { timestamp, price } = bitcoinPriceTimeseries[index]
                      return (
                        <VStack>
                          <Text color="contrast" weight="semibold">
                            ${formatAmount(price)}
                          </Text>
                          <Text color="supporting" size={14} weight="semibold">
                            {format(
                              convertDuration(timestamp, 's', 'ms'),
                              'EEE d, MMM yyyy',
                            )}
                          </Text>
                        </VStack>
                      )
                    }}
                  />
                  <VStack style={{ position: 'relative' }}>
                    <LineChart
                      width={size.width}
                      height={chartConfig.chartHeight}
                      data={data}
                    />
                    <LineChartPositionTracker
                      data={data}
                      color={color}
                      onChange={setSelectedPoint}
                    />
                  </VStack>
                  <ChartXAxis
                    data={data}
                    expectedLabelWidth={chartConfig.expectedLabelWidth}
                    labelsMinDistance={chartConfig.labelsMinDistance}
                    containerWidth={size.width}
                    minHeight={labelMinHeight}
                    renderLabel={(index) => (
                      <Text size={12} color="supporting" nowrap>
                        {format(
                          convertDuration(
                            bitcoinPriceTimeseries[index].timestamp,
                            's',
                            'ms',
                          ),
                          'MMM yyyy',
                        )}
                      </Text>
                    )}
                  />
                </>
              )}
            </Container>
          )
        }}
      />
    </DemoPage>
  )
})
