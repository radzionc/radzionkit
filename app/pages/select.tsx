import { useState } from 'react'
import styled from 'styled-components'
import { ElementSizeAware } from '@reactkit/ui/base/ElementSizeAware'
import { SelectOption } from '@reactkit/ui/ui/inputs/Select/SelectOption'
import { VStack } from '@reactkit/ui/layout/Stack'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'

export const focusOptions = [
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  60,
  90,
  'infinite',
] as const

export type FocusDuration = (typeof focusOptions)[number]

const SelectContainer = styled.div<{ isSmallScreen: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ isSmallScreen }) =>
    isSmallScreen ? 'repeat(5, 1fr)' : 'repeat(6, 60px)'};
  gap: 8px;

  > * {
    :last-child {
      grid-column: ${({ isSmallScreen }) =>
        isSmallScreen ? '1 / -1' : '5 / span 2'};
    }
  }
`

export default makeDemoPage(() => {
  const [focusDuration, setFocusDuration] = useState<FocusDuration>(25)

  return (
    <DemoPage youtubeVideoId="o7V3vaIH7rM" title="Select">
      <ElementSizeAware
        render={({ setElement, size }) => (
          <VStack alignItems="start" fullWidth ref={setElement}>
            {size && (
              <SelectContainer isSmallScreen={size.width < 400}>
                {focusOptions.map((option) => (
                  <SelectOption
                    groupName="focus-duration"
                    isSelected={focusDuration === option}
                    key={option}
                    value={option}
                    onSelect={() => setFocusDuration(option)}
                  >
                    {option === 'infinite' ? 'stopwatch' : option}
                  </SelectOption>
                ))}
              </SelectContainer>
            )}
          </VStack>
        )}
      />
    </DemoPage>
  )
})
