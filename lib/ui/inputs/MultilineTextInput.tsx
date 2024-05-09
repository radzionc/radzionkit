import { InputProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { ComponentProps, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { toSizeUnit } from '../css/toSizeUnit'

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

type TaskNameInputProps = InputProps<string> &
  Omit<ComponentProps<typeof Container>, 'value' | 'onChange'>

export const MultilineTextInput = ({
  value,
  onChange,
  ...rest
}: TaskNameInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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
      ref={textareaRef}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={1}
      {...rest}
    />
  )
}
