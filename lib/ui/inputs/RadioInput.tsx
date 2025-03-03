import { HStack } from '@lib/ui/css/stack'
import { useId } from 'react'
import styled, { css } from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { horizontalPadding } from '../css/horizontalPadding'
import { interactive } from '../css/interactive'
import { sameDimensions } from '../css/sameDimensions'
import { textInputHeight } from '../css/textInput'
import { toSizeUnit } from '../css/toSizeUnit'
import { transition } from '../css/transition'
import { InputProps, UiProps } from '../props'
import { getColor, matchColor } from '../theme/getters'
import { Tooltip } from '../tooltips/Tooltip'

import { InvisibleHTMLRadio } from './InvisibleHTMLRadio'

interface RadioInputProps<T extends string> extends InputProps<T>, UiProps {
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
              key={option}
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
