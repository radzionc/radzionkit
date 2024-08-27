import styled, { css } from 'styled-components'
import { InvisibleHTMLRadio } from './InvisibleHTMLRadio'
import { getColor, matchColor } from '../theme/getters'
import { interactive } from '../css/interactive'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { HStack } from '../layout/Stack'
import { InputProps, UIComponentProps } from '../props'
import { borderRadius } from '../css/borderRadius'
import { useId } from 'react'
import { Tooltip } from '../tooltips/Tooltip'
import { toSizeUnit } from '../css/toSizeUnit'
import { textInputHeight } from '../css/textInput'
import { horizontalPadding } from '../css/horizontalPadding'

interface RadioInputProps<T extends string>
  extends InputProps<T>,
    UIComponentProps {
  options: readonly T[]
  renderOption: (option: T) => React.ReactNode
  isOptionDisabled?: (option: T) => string | false
  minOptionHeight?: number
}

const Indicator = styled.div<{ selected: boolean }>`
  ${sameDimensions(8)};
  border-radius: 50%;
  background: ${matchColor('selected', {
    true: 'primary',
    false: 'mistExtra',
  })};
`

const Container = styled.label<{ selected: boolean; disabled?: boolean }>`
  position: relative;
  ${horizontalPadding(12)};
  font-size: 14px;
  ${borderRadius.s};
  display: flex;
  align-items: center;
  background: ${getColor('foreground')};
  ${transition};
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
        `
      : css`
          ${interactive};
          &:hover {
            background: ${getColor('mist')};
          }
        `}

  color: ${matchColor('selected', {
    true: 'contrast',
    false: 'text',
  })};
  font-weight: 500;
`

export const RadioInput = <T extends string>({
  value,
  onChange,
  options,
  renderOption,
  isOptionDisabled = () => false,
  minOptionHeight = textInputHeight,
  ...rest
}: RadioInputProps<T>) => {
  const groupName = useId()

  const style = {
    minHeight: toSizeUnit(minOptionHeight),
  }

  return (
    <HStack gap={8} {...rest}>
      {options.map((option) => {
        const isSelected = option === value
        const disabledMessage = isOptionDisabled(option)
        const content = (
          <>
            <HStack alignItems="center" gap={8}>
              <Indicator selected={isSelected} />
              {renderOption(option)}
            </HStack>
            <InvisibleHTMLRadio
              isSelected={isSelected}
              value={option}
              groupName={groupName}
              onSelect={() => {
                if (!disabledMessage) {
                  onChange(option)
                }
              }}
            />
          </>
        )

        if (disabledMessage) {
          return (
            <Tooltip
              content={disabledMessage}
              renderOpener={(props) => (
                <Container
                  {...props}
                  disabled
                  selected={isSelected}
                  key={option}
                  style={style}
                >
                  {content}
                </Container>
              )}
            />
          )
        }

        return (
          <Container style={style} selected={isSelected} key={option}>
            {content}
          </Container>
        )
      })}
    </HStack>
  )
}
