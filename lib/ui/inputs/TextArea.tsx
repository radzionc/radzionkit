import { ChangeEvent, ComponentProps, Ref, forwardRef, useState } from 'react'
import styled from 'styled-components'

import { SharedTextInputProps } from './TextInput'
import { toSizeUnit } from '../css/toSizeUnit'
import { Text } from '../text'
import { textInput, textInputHorizontalPadding } from '../css/textInput'
import { InputContainer } from './InputContainer'
import { InputLabel } from './InputLabel'

const TextareaContainer = styled.textarea`
  ${textInput};
  resize: none;
  height: initial;
  padding-top: ${toSizeUnit(textInputHorizontalPadding)};
`

const characterCounterHeight = 10
const characterCounterMargin = 16

const CharacterCounterWrapper = styled.div`
  position: absolute;
  bottom: ${toSizeUnit(characterCounterMargin + characterCounterHeight)};
  right: ${toSizeUnit(characterCounterMargin)};
  user-select: none;
`

type TextAreaProps = ComponentProps<typeof TextareaContainer> &
  SharedTextInputProps & {
    value?: string
  }

export const TextArea = forwardRef(function TextAreaInner(
  { onValueChange, label, ...props }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement> | null,
) {
  const [charactersCount, setCharactersCount] = useState(0)

  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <TextareaContainer
        {...props}
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
    </InputContainer>
  )
})
