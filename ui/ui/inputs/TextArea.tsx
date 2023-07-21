import {
  ChangeEvent,
  Ref,
  TextareaHTMLAttributes,
  forwardRef,
  useState,
} from "react"
import styled from "styled-components"


import { InputWrapperWithErrorMessage } from "./InputWrapper"
import { SharedTextInputProps } from "./TextInput"
import { commonInputCSS } from "./commonInputCSS"
import { getCSSUnit } from "../utils/getCSSUnit"
import { Text } from "../Text"

const TextareaContainer = styled.textarea`
  ${commonInputCSS};
  resize: none;
  height: initial;
`

const characterCounterHeight = 10
const characterCounterMargin = 16

const CharacterCounterWrapper = styled.div`
  position: absolute;
  bottom: ${getCSSUnit(characterCounterMargin + characterCounterHeight)};
  right: ${getCSSUnit(characterCounterMargin)};
  user-select: none;
`

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> &
  SharedTextInputProps & {
    value?: string
  }

export const TextArea = forwardRef(function TextAreaInner(
  { onValueChange, label, error, ...props }: Props,
  ref: Ref<HTMLTextAreaElement> | null
) {
  const [charactersCount, setCharactersCount] = useState(0)

  return (
    <InputWrapperWithErrorMessage error={error} label={label}>
      <TextareaContainer
        {...props}
        isValid={!error}
        ref={ref}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setCharactersCount(event.currentTarget.value.length)
          props.onChange?.(event)
          onValueChange?.(event.currentTarget.value)
        }}
      />
      {props.maxLength && (
        <CharacterCounterWrapper>
          <Text color="shy" height="small" size={10}>
            {charactersCount} / {props.maxLength}
          </Text>
        </CharacterCounterWrapper>
      )}
    </InputWrapperWithErrorMessage>
  )
})
