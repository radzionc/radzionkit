import { HStack, VStack } from '@lib/ui/css/stack'
import { toPercents } from '@lib/utils/toPercents'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { HSLA } from '../../colors/HSLA'
import { centerContent } from '../../css/centerContent'
import { toSizeUnit } from '../../css/toSizeUnit'
import { transition } from '../../css/transition'
import { Spacer } from '../../layout/Spacer'
import { Text } from '../../text'
import { getColor } from '../../theme/getters'

export interface BarChartItem {
  label?: ReactNode
  value: number
  color: HSLA
  renderValue?: (value: number) => ReactNode
}

interface BarChartProps {
  items: BarChartItem[]
  height: React.CSSProperties['height']
  expectedValueHeight?: React.CSSProperties['height']
  expectedLabelHeight?: React.CSSProperties['height']
  minBarWidth?: number
}

const barValueGap = '4px'
const barLabelGap = '4px'
const defaultLabelSize = 12

const Bar = styled.div`
  border-radius: 4px;
  width: 100%;
  ${transition};
`

const RelativeWrapper = styled.div`
  position: relative;
  ${centerContent};
`

export const BarPlaceholder = styled(Bar)`
  height: 2px;
  background: ${getColor('mist')};
`

const Value = styled(Text)`
  position: absolute;
  white-space: nowrap;
  line-height: 1;
  bottom: ${barValueGap};
  color: ${getColor('textSupporting')};
`

const Label = styled(Value)`
  top: ${barLabelGap};
`

const Content = styled(HStack)`
  flex: 1;
`

const Column = styled(VStack)`
  height: 100%;
  justify-content: end;
  flex: 1;
`

export const BarChart = ({
  items,
  height,
  expectedValueHeight = defaultLabelSize,
  expectedLabelHeight = defaultLabelSize,
  minBarWidth,
}: BarChartProps) => {
  const maxValue = Math.max(...items.map((item) => item.value))

  const hasLabels = items.some((item) => item.label)

  return (
    <VStack style={{ height }}>
      <Spacer
        height={`calc(${toSizeUnit(expectedValueHeight)} + ${barValueGap})`}
      />
      <Content gap={4}>
        {items.map(({ value, color, renderValue, label }, index) => {
          return (
            <Column
              style={minBarWidth ? { minWidth: minBarWidth } : undefined}
              key={index}
            >
              {renderValue && (
                <RelativeWrapper>
                  <Value style={{ fontSize: defaultLabelSize }} as="div">
                    {renderValue(value)}
                  </Value>
                </RelativeWrapper>
              )}
              <Bar
                style={{
                  background: color.toCssValue(),
                  height: value ? toPercents(value / maxValue) : '2px',
                }}
              />
              {label && (
                <RelativeWrapper>
                  <Label style={{ fontSize: defaultLabelSize }} as="div">
                    {label}
                  </Label>
                </RelativeWrapper>
              )}
            </Column>
          )
        })}
      </Content>
      {hasLabels && (
        <Spacer
          height={`calc(${toSizeUnit(expectedLabelHeight)} + ${barLabelGap})`}
        />
      )}
    </VStack>
  )
}
