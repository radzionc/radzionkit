import { ChangeEvent, ComponentProps, Ref, forwardRef, useState } from 'react'
import styled from 'styled-components'

import { SharedTextInputProps } from './TextInput'
import { toSizeUnit } from '../css/toSizeUnit'
import { Text } from '../text'
import { InputContainer } from './InputContainer'
import { LabelText } from './LabelText'
import { textInput } from '../css/textInput'

const TextareaContainer = styled.textarea`
  ${textInput};
  resize: none;
  height: initial;
`

const characterCounterHeight = 10
const characterCounterMargin = 16

const CharacterCounterWrapper = styled.div`
  position: absolute;
  bottom: ${toSizeUnit(characterCounterMargin + characterCounterHeight)};
  right: ${toSizeUnit(characterCounterMargin)};
  user-select: none;
`

interface TextAreaProps
  extends ComponentProps<typeof TextareaContainer>,
    SharedTextInputProps {
  value?: string
}

export const TextArea = forwardRef(function TextAreaInner(
  { onValueChange, label, ...props }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement> | null,
) {
  const [charactersCount, setCharactersCount] = useState(0)

  return (
    <InputContainer>
      {label && <LabelText>{label}</LabelText>}
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
