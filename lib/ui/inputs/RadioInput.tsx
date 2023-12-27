import styled, { css } from 'styled-components'
import { InvisibleHTMLRadio } from './InvisibleHTMLRadio'
import { getColor, matchColor } from '../theme/getters'
import { interactive } from '../css/interactive'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { HStack } from '../layout/Stack'
import { InputProps } from '../props'
import { borderRadius } from '../css/borderRadius'
import { useId } from 'react'
import { Tooltip } from '../tooltips/Tooltip'

interface RadioInputProps<T extends string> extends InputProps<T> {
  options: readonly T[]
  renderOption: (option: T) => React.ReactNode
  isOptionDisabled?: (option: T) => string | false
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
  padding: 12px 20px;
  ${borderRadius.m};
  background: ${getColor('foreground')};
  ${transition};
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
        `
      : css`
          ${interactive};
          :hover {
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
}: RadioInputProps<T>) => {
  const groupName = useId()

  return (
    <HStack gap={4}>
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
                >
                  {content}
                </Container>
              )}
            />
          )
        }

        return (
          <Container selected={isSelected} key={option}>
            {content}
          </Container>
        )
      })}
    </HStack>
  )
}
