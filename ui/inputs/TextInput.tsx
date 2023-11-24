import { ChangeEvent, ComponentProps, Ref, forwardRef } from 'react'
import styled from 'styled-components'

import { commonInputCSS } from './commonInputCSS'
import { VStack } from '../layout/Stack'
import { Spinner } from '../loaders/Spinner'
import { ComponentWithClassNameProps, LabeledComponentProps } from '../props'
import { InputContainer } from './InputContainer'
import { LabelText } from './LabelText'

export type SharedTextInputProps = Partial<LabeledComponentProps> & {
  onValueChange?: (value: string) => void
  isLoading?: boolean
}

export interface TextInputProps
  extends ComponentProps<typeof TextInputContainer>,
    SharedTextInputProps {
  inputOverlay?: React.ReactNode
}

export const TextInput = forwardRef(function TextInputInner(
  {
    onValueChange,
    error,
    inputOverlay,
    isLoading,
    className,
    label,
    ...props
  }: TextInputProps,
  ref: Ref<HTMLInputElement> | null,
) {
  return (
    <InputContainer>
      {label && <LabelText>{label}</LabelText>}
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
    </InputContainer>
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
      <Spinner />
    </VStack>
  </TextInputContainer>
)
