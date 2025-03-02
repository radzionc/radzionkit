import { ReactNode } from 'react'
import styled from 'styled-components'

import { ChecklistItemFrame } from './ChecklistItemFrame'
import { matchColor } from '../theme/getters'
import { transition } from '../css/transition'
import { Text } from '../text'
import { Hoverable } from '../base/Hoverable'
import {
  InvisibleHTMLCheckbox,
  InvisibleHTMLCheckboxProps,
} from '../inputs/InvisibleHTMLCheckbox'
import { CheckStatus } from './CheckStatus'

interface ChecklistItemProps extends InvisibleHTMLCheckboxProps {
  name: ReactNode
  style?: React.CSSProperties
  shouldCrossOut?: boolean
}

const Content = styled(Text)<{ isChecked: boolean }>`
  max-width: 100%;
  position: relative;
  color: ${matchColor('isChecked', {
    true: 'textSupporting',
    false: 'text',
  })};
`

const Line = styled.span<{ isChecked: boolean }>`
  position: absolute;
  ${transition};
  left: 0;
  border-top: 1px solid;
  bottom: 8px;
  width: ${({ isChecked }) => (isChecked ? '100%' : '0%')};
`

export const ChecklistItem = ({
  value,
  onChange,
  name,
  style,
  shouldCrossOut,
}: ChecklistItemProps) => {
  return (
    <Hoverable verticalOffset={0} style={style} as="label">
      <ChecklistItemFrame>
        <CheckStatus value={value} />
        <Content as="div" isChecked={value} cropped>
          {name}
          {shouldCrossOut && <Line isChecked={value} />}
        </Content>
        <InvisibleHTMLCheckbox
          value={value}
          onChange={() => {
            const newValue = !value
            onChange(newValue)
          }}
        />
      </ChecklistItemFrame>
    </Hoverable>
  )
}
