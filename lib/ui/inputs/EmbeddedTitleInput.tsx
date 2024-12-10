import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { InputProps } from '@lib/ui/props'
import { ComponentProps } from 'react'
import styled from 'styled-components'

import { MultilineTextInput } from '@lib/ui/inputs/MultilineTextInput'
import { tightListItemConfig } from '@lib/ui/list/tightListItemConfig'

const Container = styled(MultilineTextInput)`
  line-height: ${toSizeUnit(tightListItemConfig.lineHeight)};
  width: 100%;
  font-size: 16px;
  font-weight: 600;
`

type EmbeddedTitleInputProps = InputProps<string> &
  Omit<ComponentProps<typeof Container>, 'value' | 'onChange'> & {
    lineBreakEnabled?: boolean
    onSubmit?: () => void
  }

export function EmbeddedTitleInput({
  value,
  onChange,
  onSubmit,
  lineBreakEnabled,
  ...rest
}: EmbeddedTitleInputProps) {
  return (
    <Container
      value={value}
      onChange={onChange}
      autoComplete="off"
      onKeyDown={(event) => {
        if (event.key !== 'Enter') return

        if (!event.shiftKey) {
          event.preventDefault()
          onSubmit?.()
        }

        if (!lineBreakEnabled) {
          event.preventDefault()
        }
      }}
      {...rest}
    />
  )
}
