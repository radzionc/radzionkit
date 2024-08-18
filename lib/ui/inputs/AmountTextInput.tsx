import { Ref, forwardRef, ReactNode, useState } from 'react'
import styled from 'styled-components'

import { TextInput, TextInputProps } from './TextInput'
import { centerContent } from '../css/centerContent'
import { HStack } from '../layout/Stack'
import { borderRadius } from '../css/borderRadius'

type AmountTextInputProps = Omit<TextInputProps, 'value' | 'onValueChange'> & {
  value: number | undefined
  onValueChange?: (value: number | undefined) => void
  unit?: ReactNode
  shouldBePositive?: boolean
  shouldBeInteger?: boolean
  suggestion?: ReactNode
}

const UnitContainer = styled.div`
  ${borderRadius.s};

  position: absolute;
  left: 12px;
  ${centerContent};
`

export const AmountTextInput = forwardRef(function AmountInputInner(
  {
    onValueChange,
    unit,
    value,
    shouldBePositive,
    shouldBeInteger,
    suggestion,
    label,
    placeholder,
    type = 'number',
    ...props
  }: AmountTextInputProps,
  ref: Ref<HTMLInputElement> | null,
) {
  const valueAsString = value?.toString() ?? ''
  const [inputValue, setInputValue] = useState<string>(valueAsString)

  return (
    <TextInput
      {...props}
      style={unit ? { paddingLeft: 36 } : undefined}
      type={type}
      label={
        <HStack
          alignItems="center"
          justifyContent="space-between"
          gap={16}
          fullWidth
        >
          {label}
          {suggestion}
        </HStack>
      }
      placeholder={placeholder ?? 'Enter amount'}
      value={
        Number(valueAsString) === Number(inputValue)
          ? inputValue
          : valueAsString
      }
      ref={ref}
      inputOverlay={unit ? <UnitContainer>{unit}</UnitContainer> : undefined}
      onValueChange={(value: string) => {
        if (shouldBePositive) {
          value = value.replace(/-/g, '')
        }

        if (value === '') {
          setInputValue('')
          onValueChange?.(undefined)
          return
        }

        const parse = shouldBeInteger ? parseInt : parseFloat
        const valueAsNumber = parse(value)
        if (isNaN(valueAsNumber)) {
          return
        }

        setInputValue(
          valueAsNumber.toString() !== value ? value : valueAsNumber.toString(),
        )
        onValueChange?.(valueAsNumber)
      }}
    />
  )
})
