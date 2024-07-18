import { InputProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { ComponentProps, useLayoutEffect, useRef, forwardRef } from 'react'
import styled from 'styled-components'
import { toSizeUnit } from '../css/toSizeUnit'
import mergeRefs from '../utils/mergeRefs'

const Container = styled.textarea`
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;

  background: transparent;
  color: ${getColor('text')};

  &::placeholder {
    color: ${getColor('textShy')};
  }
`

type MultilineTextInputProps = InputProps<string> &
  Omit<ComponentProps<typeof Container>, 'value' | 'onChange'>

export const MultilineTextInput = forwardRef<
  HTMLTextAreaElement,
  MultilineTextInputProps
>(({ value, onChange, ...rest }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useLayoutEffect(() => {
    const element = textareaRef.current
    if (element) {
      element.style.height = 'auto'
      element.style.height = toSizeUnit(element.scrollHeight)
    }
  }, [value])

  return (
    <Container
      autoComplete="off"
      ref={mergeRefs(ref, textareaRef)}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={1}
      {...rest}
    />
  )
})
