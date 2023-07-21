import { sum } from 'shared/utils/sum'
import { toPercents } from 'shared/utils/toPercents'
import { useMemo } from 'react'
import styled from 'styled-components'

import { defaultTransitionCSS } from './animations/transitions'
import { HSLA } from './colors/HSLA'
import { ElementSizeAware } from './ElementSizeAware'
import { Panel } from './Panel/Panel'
import { VStack } from './Stack'
import { Text } from './Text'

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
  ${defaultTransitionCSS};
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
                      <Text color="contrast" weight="bold" size={14}>
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
