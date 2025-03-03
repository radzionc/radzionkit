import { VStack } from '@lib/ui/css/stack'
import { ChangeEvent, ComponentProps } from 'react'
import styled from 'styled-components'

import { textInput } from '../css/textInput'
import { Spinner } from '../loaders/Spinner'
import { ClassNameProp, LabelProp } from '../props'

import { InputContainer } from './InputContainer'
import { InputLabel } from './InputLabel'

export type SharedTextInputProps = Partial<LabelProp> &
  ComponentProps<typeof TextInputContainer> & {
    onValueChange?: (value: string) => void
    isLoading?: boolean
  }

export interface TextInputProps
  extends ComponentProps<typeof TextInputContainer>,
    SharedTextInputProps {
  inputOverlay?: React.ReactNode
}

export function TextInput({
  onValueChange,
  inputOverlay,
  isLoading,
  className,
  label,
  ...props
}: TextInputProps) {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWr>
        {isLoading ? (
          <TextInputLoader className={className} />
        ) : (
          <TextInputContainer
            {...props}
            className={className}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              props.onChange?.(event)
              onValueChange?.(event.currentTarget.value)
            }}
          />
        )}
        {inputOverlay}
      </InputWr>
    </InputContainer>
  )
}

const InputWr = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

export const TextInputContainer = styled.input`
  ${textInput};
`

export const TextInputLoader = ({ className }: ClassNameProp) => (
  <TextInputContainer as="div" className={className}>
    <VStack fullHeight justifyContent="center">
      <Spinner />
    </VStack>
  </TextInputContainer>
)
