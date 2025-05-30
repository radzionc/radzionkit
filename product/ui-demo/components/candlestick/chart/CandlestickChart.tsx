import { PriceCandle, priceCandlePriceFields } from '@lib/trading/PriceCandle'
import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'
import { HoverTracker } from '@lib/ui/base/HoverTracker'
import { ChartHorizontalGridLines } from '@lib/ui/charts/ChartHorizontalGridLines'
import { ChartLabel } from '@lib/ui/charts/ChartLabel'
import { ChartSlice } from '@lib/ui/charts/ChartSlice'
import { ChartXAxis } from '@lib/ui/charts/ChartXAxis'
import { ChartYAxis } from '@lib/ui/charts/ChartYAxis'
import { generateYLabels } from '@lib/ui/charts/utils/generateYLabels'
import { VStack } from '@lib/ui/css/stack'
import { TakeWholeSpaceAbsolutely } from '@lib/ui/css/takeWholeSpaceAbsolutely'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { BodyPortal } from '@lib/ui/dom/BodyPortal'
import { ValueProp } from '@lib/utils/entities/props'
import { getSegmentIndex } from '@lib/utils/math/getSegmentIndex'
import { normalizeDataArrays } from '@lib/utils/math/normalizeDataArrays'
import { recordFromKeys } from '@lib/utils/record/recordFromKeys'
import { format } from 'date-fns'
import { useMemo, useState } from 'react'

import { Candlestick } from './Candlestick'
import { CandlestickInfo } from './CandlestickInfo'
import { chartConfig } from './config'

export function CandlestickChart({ value }: ValueProp<PriceCandle[]>) {
  const yLabels = useMemo(() => {
    return generateYLabels({
      data: value.flatMap((candle) => [candle.low, candle.high]),
    })
  }, [value])

  const normalized = normalizeDataArrays({
    yLabels,
    ...recordFromKeys(priceCandlePriceFields, (field) =>
      value.map((candle) => candle[field]),
    ),
  })

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <VStack fullWidth gap={20}>
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
          <UniformColumnGrid
            gap={4}
            style={{
              height: chartConfig.chartHeight,
              position: 'relative',
            }}
          >
            {value.map((_, index) => (
              <Candlestick
                key={index}
                value={recordFromKeys(
                  priceCandlePriceFields,
                  (field) => normalized[field][index],
                )}
                isActive={selectedIndex === index}
              />
            ))}
            <HoverTracker
              onChange={({ position }) => {
                setSelectedIndex(
                  position ? getSegmentIndex(value.length, position.x) : null,
                )
              }}
              render={({ props, clientPosition }) => (
                <TakeWholeSpaceAbsolutely {...props}>
                  <BodyPortal>
                    {clientPosition && selectedIndex !== null && (
                      <CandlestickInfo
                        position={clientPosition}
                        value={value[selectedIndex]}
                      />
                    )}
                  </BodyPortal>
                </TakeWholeSpaceAbsolutely>
              )}
            />
          </UniformColumnGrid>
          <ChartHorizontalGridLines data={normalized.yLabels} />
        </VStack>
      </ChartSlice>
      <ElementSizeAware
        render={({ setElement, size }) => (
          <ChartSlice yLabelsWidth={chartConfig.yLabelsWidth} ref={setElement}>
            <div />
            {size?.width !== undefined && (
              <ChartXAxis
                dataSize={value.length}
                containerWidth={size.width}
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
        )}
      />
    </VStack>
  )
}
