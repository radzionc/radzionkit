import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'
import { useTheme } from 'styled-components'
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

const chartConfig = {
  chartHeight: 240,
  expectedLabelWidth: 58,
  expectedLabelHeight: 18,
  labelsMinDistance: 20,
}

const data = dataVerticalPadding(
  normalize(bitcoinPriceTimeseries.map((item) => item.price)),
  {
    top: 0.2,
    bottom: 0.2,
  },
)

export default makeDemoPage(() => {
  const [selectedPoint, setSelectedPoint] = useState<number>(data.length - 1)
  const [isSelectedPointVisible, setIsSelectedPointVisible] =
    useState<boolean>(false)

  const { colors } = useTheme()
  const color = colors.primary

  const { timestamp, price } = bitcoinPriceTimeseries[selectedPoint]

  return (
    <DemoPage title="Line Chart">
      <ElementSizeAware
        render={({ setElement, size }) => {
          return (
            <VStack fullWidth gap={4} ref={setElement}>
              {size && (
                <>
                  <LineChartItemInfo
                    itemIndex={selectedPoint}
                    isVisible={isSelectedPointVisible}
                    containerWidth={size.width}
                    data={data}
                  >
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
                  </LineChartItemInfo>
                  <VStack style={{ position: 'relative' }}>
                    <LineChart
                      width={size.width}
                      height={chartConfig.chartHeight}
                      data={data}
                      color={color}
                    />
                    <LineChartPositionTracker
                      data={data}
                      color={color}
                      onChange={(index) => {
                        if (index === null) {
                          setIsSelectedPointVisible(false)
                        } else {
                          setIsSelectedPointVisible(true)
                          setSelectedPoint(index)
                        }
                      }}
                    />
                  </VStack>
                  <ChartXAxis
                    data={data}
                    expectedLabelWidth={chartConfig.expectedLabelWidth}
                    labelsMinDistance={chartConfig.labelsMinDistance}
                    containerWidth={size.width}
                    expectedLabelHeight={chartConfig.expectedLabelHeight}
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
            </VStack>
          )
        }}
      />
    </DemoPage>
  )
})
