import { HStack } from '@lib/ui/css/stack'
import React, { ReactNode } from 'react'
import { useId } from 'react'

import { InputProps, UiProps } from '../../props'
import { InputContainer } from '../InputContainer'
import { InputLabel } from '../InputLabel'
import { InvisibleHTMLRadio } from '../InvisibleHTMLRadio'

import { SelectOption } from './SelectOption'

interface RadioInputProps<T extends string> extends InputProps<T>, UiProps {
  options: readonly T[]
  renderOption: (option: T) => React.ReactNode
  isOptionDisabled?: (option: T) => string | false
  label?: ReactNode
}

export const RadioInput = <T extends string>({
  value,
  onChange,
  options,
  renderOption,
  isOptionDisabled = () => false,
  label,
  ...rest
}: RadioInputProps<T>) => {
  const groupName = useId()

  return (
    <InputContainer>
      {label && <InputLabel as="div">{label}</InputLabel>}
      <HStack {...rest} wrap="wrap" gap={4}>
        {options.map((option) => {
          const isSelected = value.includes(option)
          const isDisabled = isOptionDisabled(option)
          return (
            <SelectOption
              key={option}
              isSelected={isSelected}
              isDisabled={isDisabled}
            >
              {renderOption(option)}
              {!isDisabled && (
                <InvisibleHTMLRadio
                  isSelected={isSelected}
                  value={option}
                  groupName={groupName}
                  onSelect={() => {
                    onChange(option)
                  }}
                />
              )}
            </SelectOption>
          )
        })}
      </HStack>
    </InputContainer>
  )
}
