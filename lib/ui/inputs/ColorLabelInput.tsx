

import { InputProps, StyledComponentWithColorProps } from 'lib/shared/props'
import { range } from 'lib/shared/utils/range'
import { splitBy } from 'lib/shared/utils/splitBy'
import styled, { useTheme } from 'styled-components'
import { Menu } from '../Menu'
import { VStack } from '../Stack'
import { defaultTransitionCSS } from '../animations/transitions'
import { defaultBorderRadiusCSS } from '../borderRadius'
import { paletteColorsCount } from '../colors/palette'
import { CheckIcon } from '../icons/CheckIcon'
import { getColor } from '../theme/getters'
import { centerContentCSS } from '../utils/centerContentCSS'
import { getSameDimensionsCSS } from '../utils/getSameDimensionsCSS'
import { InvisibleHTMLRadio } from './InvisibleHTMLRadio'
import { ExpandableInputOpener } from './ExpandableInputOpener'
import { ShySection } from '../ShySection'

interface ColorLabelInputProps extends InputProps<number> {
  usedValues?: Set<number>
}

const CurrentColor = styled.div<StyledComponentWithColorProps>`
  background: ${({ $color }) => $color.toCssValue()};
  border-radius: 8px;
  ${getSameDimensionsCSS('68%')}
`

const ColorOption = styled.label<StyledComponentWithColorProps>`
  position: relative;
  cursor: pointer;
  ${centerContentCSS};
  background: ${({ $color }) => $color.toCssValue()};

  aspect-ratio: 1/1;

  ${defaultBorderRadiusCSS};

  font-size: 32px;
  color: ${getColor('foreground')};

  ${defaultTransitionCSS};

  :hover {
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
    colors: { getPaletteColor },
  } = useTheme()

  const colors = range(paletteColorsCount)

  const [free, used] = splitBy(colors, (value) =>
    usedValues.has(value) ? 1 : 0
  )

  return (
    <Menu
      title="Select color"
      renderOpener={(props) => (
        <ExpandableInputOpener type="button" {...props}>
          <CurrentColor $color={getPaletteColor(value)} />
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
                  <ColorOption key={index} $color={getPaletteColor(index)}>
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
            <ShySection title="Free colors">{renderColors(free)}</ShySection>
            <ShySection title="Used colors">{renderColors(used)}</ShySection>
          </VStack>
        )
      }}
    />
  )
}
