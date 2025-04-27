import { PriceCandle } from '@lib/trading/PriceCandle'
import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'
import { ChartHorizontalGridLines } from '@lib/ui/charts/ChartHorizontalGridLines'
import { ChartLabel } from '@lib/ui/charts/ChartLabel'
import { ChartSlice } from '@lib/ui/charts/ChartSlice'
import { ChartXAxis } from '@lib/ui/charts/ChartXAxis'
import { ChartYAxis } from '@lib/ui/charts/ChartYAxis'
import { generateYLabels } from '@lib/ui/charts/utils/generateYLabels'
import { VStack } from '@lib/ui/css/stack'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { ValueProp } from '@lib/utils/entities/props'
import { normalizeDataArrays } from '@lib/utils/math/normalizeDataArrays'
import { format } from 'date-fns'
import { useMemo } from 'react'

import { Candlestick } from './Candlestick'
import { chartConfig } from './config'

export function CandlestickChart({ value }: ValueProp<PriceCandle[]>) {
  const yLabels = useMemo(() => {
    return generateYLabels({
      data: value.flatMap((candle) => [candle.low, candle.high]),
    })
  }, [value])

  const normalized = normalizeDataArrays({
    yLabels,
    open: value.map((candle) => candle.open),
    close: value.map((candle) => candle.close),
    low: value.map((candle) => candle.low),
    high: value.map((candle) => candle.high),
  })

  return (
    <ElementSizeAware
      render={({ setElement, size }) => {
        const contentWidth = size
          ? size.width - chartConfig.yLabelsWidth
          : undefined

        return (
          <VStack fullWidth gap={20} ref={setElement}>
            <ChartSlice yLabelsWidth={chartConfig.yLabelsWidth}>
              <ChartYAxis
                renderLabel={(index) => (
                  <ChartLabel key={index}>${yLabels[index]}</ChartLabel>
                )}
                data={normalized.yLabels}
              />
              <VStack
                style={{
                  position: 'relative',
                }}
                fullWidth
              >
                {contentWidth && (
                  <UniformColumnGrid
                    gap={4}
                    style={{ height: chartConfig.chartHeight }}
                  >
                    {value.map((_, index) => (
                      <Candlestick
                        key={index}
                        value={{
                          open: normalized.open[index],
                          close: normalized.close[index],
                          low: normalized.low[index],
                          high: normalized.high[index],
                        }}
                      />
                    ))}
                  </UniformColumnGrid>
                )}
                <ChartHorizontalGridLines data={normalized.yLabels} />
              </VStack>
            </ChartSlice>
            <ChartSlice yLabelsWidth={chartConfig.yLabelsWidth}>
              <div />
              {contentWidth && (
                <ChartXAxis
                  dataSize={value.length}
                  containerWidth={contentWidth}
                  expectedLabelHeight={chartConfig.xLabelsHeight}
                  expectedLabelWidth={chartConfig.xLabelsWidth}
                  labelsMinDistance={chartConfig.xLabelsMinDistance}
                  renderLabel={(index) => (
                    <ChartLabel key={index}>
                      {format(value[index].startTime, 'MMM yyyy')}
                    </ChartLabel>
                  )}
                />
              )}
            </ChartSlice>
          </VStack>
        )
      }}
    />
  )
}
