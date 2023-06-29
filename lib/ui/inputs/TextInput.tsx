import { ChangeEvent, InputHTMLAttributes, Ref, forwardRef } from 'react'
import styled from 'styled-components'

import {
  Props as InputWrapperProps,
  InputWrapperWithErrorMessage,
} from './InputWrapper'
import { Spinner } from '../Spinner'
import { commonInputCSS } from './commonInputCSS'
import { ComponentWithClassNameProps } from 'lib/shared/props'
import { VStack } from '../Stack'

export type SharedTextInputProps = Pick<
  InputWrapperProps,
  'label' | 'error'
> & {
  onValueChange?: (value: string) => void
  isLoading?: boolean
}

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  SharedTextInputProps & {
    inputOverlay?: React.ReactNode
  }

export const TextInput = forwardRef(function TextInputInner(
  {
    onValueChange,
    label,
    error,
    height,
    inputOverlay,
    isLoading,
    className,
    ...props
  }: TextInputProps,
  ref: Ref<HTMLInputElement> | null
) {
  return (
    <InputWrapperWithErrorMessage error={error} label={label}>
      <InputWr>
        {isLoading ? (
          <TextInputLoader className={className} />
        ) : (
          <TextInputContainer
            {...props}
            isValid={!error}
            className={className}
            ref={ref}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              props.onChange?.(event)
              onValueChange?.(event.currentTarget.value)
            }}
          />
        )}
        {inputOverlay}
      </InputWr>
    </InputWrapperWithErrorMessage>
  )
})

const InputWr = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

export const TextInputContainer = styled.input`
  ${commonInputCSS};
`

export const TextInputLoader = ({ className }: ComponentWithClassNameProps) => (
  <TextInputContainer as="div" className={className} isValid>
    <VStack fullHeight justifyContent="center">
      <Spinner size={18} />
    </VStack>
  </TextInputContainer>
)
