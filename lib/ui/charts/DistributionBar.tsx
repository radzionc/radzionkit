import { useMemo } from 'react'
import styled from 'styled-components'

import { HSLA } from '../colors/HSLA'
import { ElementSizeAware } from '../base/ElementSizeAware'
import { Panel } from '@lib/ui/css/panel'
import { VStack } from '../layout/Stack'
import { Text } from '../text'
import { getColor } from '../theme/getters'
import { sum } from '@lib/utils/array/sum'
import { toPercents } from '@lib/utils/toPercents'
import { transition } from '../css/transition'

export interface DistributionBarItem {
  value: number
  color: HSLA
}

interface DistributionBarProps {
  items: DistributionBarItem[]
  height?: React.CSSProperties['height']
}

const Container = styled(Panel)`
  padding: 0;
  width: 100%;

  display: flex;
  gap: 1px;
`

const Segment = styled.div`
  height: 100%;
  color: ${getColor('white')};
  ${transition};
`

export const DistributionBar = ({
  items,
  height = 40,
}: DistributionBarProps) => {
  const total = useMemo(() => sum(items.map((item) => item.value)), [items])

  return (
    <Container style={{ height }}>
      {items.map(({ value, color }, index) => (
        <ElementSizeAware
          key={index}
          render={({ size, setElement }) => {
            const background = color
              .getVariant({ l: () => 48, s: () => 42 })
              .toCssValue()

            return (
              <Segment
                style={{
                  width: toPercents(value / total),
                  background,
                }}
              >
                <VStack
                  fullHeight
                  fullWidth
                  alignItems="center"
                  justifyContent="center"
                  ref={setElement}
                >
                  {!size ||
                    (size.width > 20 && (
                      <Text weight="600" size={14}>
                        {Math.round((value / total) * 100)}
                        <Text as="span" size={12}>
                          %
                        </Text>
                      </Text>
                    ))}
                </VStack>
              </Segment>
            )
          }}
        />
      ))}
    </Container>
  )
}
