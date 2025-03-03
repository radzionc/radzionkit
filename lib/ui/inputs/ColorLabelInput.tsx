import { VStack } from '@lib/ui/css/stack'
import { range } from '@lib/utils/array/range'
import { splitBy } from '@lib/utils/array/splitBy'
import styled, { useTheme } from 'styled-components'

import { labelColorsCount } from '../colors/generateLabelColorGetter'
import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { CheckIcon } from '../icons/CheckIcon'
import { Menu } from '../menu'
import { InputProps, StyledColorProp } from '../props'
import { getColor } from '../theme/getters'

import { ExpandableInputOpener } from './ExpandableInputOpener'
import { InputLabel } from './InputLabel'
import { InvisibleHTMLRadio } from './InvisibleHTMLRadio'

interface ColorLabelInputProps extends InputProps<number> {
  usedValues?: Set<number>
}

const CurrentColor = styled.div<StyledColorProp>`
  background: ${({ $color }) => $color.toCssValue()};
  ${borderRadius.s};

  ${sameDimensions('68%')}
`

const ColorOption = styled.label<StyledColorProp>`
  position: relative;
  cursor: pointer;
  ${centerContent};
  background: ${({ $color }) => $color.toCssValue()};

  aspect-ratio: 1/1;

  ${borderRadius.m};

  font-size: 32px;
  color: ${getColor('foreground')};

  ${transition};

  &:hover {
    background: ${({ $color }) =>
      $color.getVariant({ l: (l) => l * 0.8 }).toCssValue()};
  }
`

const ColorsContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, 1fr);
`

export const ColorLabelInput = ({
  value,
  onChange,
  usedValues = new Set<number>(),
}: ColorLabelInputProps) => {
  const {
    colors: { getLabelColor },
  } = useTheme()

  const colors = range(labelColorsCount)

  const [free, used] = splitBy(colors, (value) =>
    usedValues.has(value) ? 1 : 0,
  )

  return (
    <Menu
      title="Select color"
      renderOpener={({ props, isOpen }) => (
        <ExpandableInputOpener isActive={isOpen} {...props}>
          <CurrentColor $color={getLabelColor(value)} />
        </ExpandableInputOpener>
      )}
      renderContent={({ onClose }) => {
        const renderColors = (colors: number[]) => {
          return (
            <ColorsContainer>
              {colors.map((index) => {
                const isSelected = index === value

                const inputValue = `Color #${index}`

                return (
                  <ColorOption key={index} $color={getLabelColor(index)}>
                    <InvisibleHTMLRadio
                      groupName="color-label-input"
                      value={inputValue}
                      isSelected={isSelected}
                      onSelect={() => {
                        onChange(index)
                        onClose()
                      }}
                    />
                    {isSelected && <CheckIcon />}
                  </ColorOption>
                )
              })}
            </ColorsContainer>
          )
        }

        if (free.length === 0 || used.length === 0) {
          return renderColors(colors)
        }

        return (
          <VStack gap={20}>
            <VStack gap={8}>
              <InputLabel>Free colors</InputLabel>
              {renderColors(free)}
            </VStack>
            <VStack gap={8}>
              <InputLabel>Used colors</InputLabel>
              {renderColors(used)}
            </VStack>
          </VStack>
        )
      }}
    />
  )
}
