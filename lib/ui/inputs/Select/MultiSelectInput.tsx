import React, { ReactNode } from 'react'
import { InvisibleHTMLCheckbox } from '../InvisibleHTMLCheckbox'
import { HStack } from '@lib/ui/css/stack'
import { InputProps, UIComponentProps } from '../../props'
import { useId } from 'react'
import { InputContainer } from '../InputContainer'
import { InputLabel } from '../InputLabel'
import { SelectOption } from './SelectOption'

interface MultiSelectInputProps<T extends string>
  extends InputProps<T[]>,
    UIComponentProps {
  options: readonly T[]
  renderOption: (option: T) => React.ReactNode
  isOptionDisabled?: (option: T) => string | false
  label?: ReactNode
}

export const MultiSelectInput = <T extends string>({
  value,
  onChange,
  options,
  renderOption,
  isOptionDisabled = () => false,
  label,
  ...rest
}: MultiSelectInputProps<T>) => {
  const groupName = useId()

  return (
    <InputContainer>
      {label && <InputLabel as="div">{label}</InputLabel>}
      <HStack {...rest} wrap="wrap" gap={4}>
        {options.map((option) => {
          const isSelected = value.includes(option)
          const isDisabled = isOptionDisabled(option)
          return (
            <SelectOption isSelected={isSelected} isDisabled={isDisabled}>
              {renderOption(option)}
              {!isDisabled && (
                <InvisibleHTMLCheckbox
                  value={isSelected}
                  id={option}
                  groupName={groupName}
                  onChange={(optionValue) => {
                    if (optionValue) {
                      onChange([...value, option])
                    } else {
                      onChange(value.filter((v) => v !== option))
                    }
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
