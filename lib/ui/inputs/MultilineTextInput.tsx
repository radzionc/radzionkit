import { InputProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { ComponentProps, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import { MergeRefs } from '../base/MergeRefs'
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

type MultilineTextInputProps = InputProps<string> &
  Omit<ComponentProps<typeof Container>, 'value' | 'onChange'>

export function MultilineTextInput({
  value,
  onChange,
  ref,
  ...rest
}: MultilineTextInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useLayoutEffect(() => {
    const element = textareaRef.current
    if (element) {
      element.style.height = 'auto'
      element.style.height = toSizeUnit(element.scrollHeight)
    }
  }, [value])

  return (
    <MergeRefs
      refs={[textareaRef, ref]}
      render={(ref) => (
        <Container
          autoComplete="off"
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={1}
          {...rest}
        />
      )}
    />
  )
}
