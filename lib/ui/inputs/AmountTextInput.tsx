import { HStack } from '@lib/ui/css/stack'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'

import { TextInput, TextInputProps } from './TextInput'

type AmountTextInputProps = Omit<TextInputProps, 'value' | 'onValueChange'> & {
  value: number | null
  onValueChange?: (value: number | null) => void
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

export function AmountTextInput({
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
}: AmountTextInputProps) {
  const valueAsString = value?.toString() ?? ''
  const [inputValue, setInputValue] = useState<string>(valueAsString)

  return (
    <TextInput
      {...props}
      style={unit ? { paddingLeft: 36 } : undefined}
      type={type}
      label={
        label || suggestion ? (
          <HStack
            alignItems="center"
            justifyContent="space-between"
            gap={16}
            fullWidth
          >
            {label}
            {suggestion}
          </HStack>
        ) : undefined
      }
      placeholder={placeholder ?? 'Enter amount'}
      onWheel={(event) => event.currentTarget.blur()}
      value={
        Number(valueAsString) === Number(inputValue)
          ? inputValue
          : valueAsString
      }
      inputOverlay={unit ? <UnitContainer>{unit}</UnitContainer> : undefined}
      onValueChange={(value: string) => {
        if (shouldBePositive) {
          value = value.replace(/-/g, '')
        }

        if (value === '') {
          setInputValue('')
          onValueChange?.(null)
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
}
