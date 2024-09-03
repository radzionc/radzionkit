import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { FormSectionShyTitle } from '@lib/ui/form/components/FormSectionShyTitle'
import { VStack } from '@lib/ui/css/stack'
import { InputProps } from '@lib/ui/props'
import { ComponentProps, ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { MultilineTextInput } from './MultilineTextInput'
import { tightListItemConfig } from '../list/tightListItemConfig'
import { panelDefaultPadding } from '@lib/ui/css/panel'

const padding = panelDefaultPadding

const Wrapper = styled(VStack)`
  padding: 0;
  position: relative;
  > * {
    padding: ${toSizeUnit(padding)};

    &:last-child {
      padding-top: ${toSizeUnit(padding + 24)};
    }
  }
`

const PositionLabel = styled.div`
  position: absolute;
  pointer-events: none;
`

const Container = styled(MultilineTextInput)`
  line-height: ${toSizeUnit(tightListItemConfig.lineHeight)};
  background: transparent;
  width: 100%;
  font-size: 14px;
`

type EmbeddedDescriptionInputProps = InputProps<string> &
  Omit<ComponentProps<typeof Container>, 'value' | 'onChange'> & {
    label: ReactNode
  }

export const EmbeddedDescriptionInput = ({
  value,
  onChange,
  label,
  ...rest
}: EmbeddedDescriptionInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Wrapper>
      <PositionLabel>
        <FormSectionShyTitle>{label}</FormSectionShyTitle>
      </PositionLabel>
      <Container
        autoComplete="off"
        ref={textareaRef}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </Wrapper>
  )
}
