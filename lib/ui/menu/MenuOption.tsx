import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { MenuView } from '.'
import { Hoverable } from '../base/Hoverable'
import { Button } from '../buttons/Button'
import { transition } from '../css/transition'
import { verticalPadding } from '../css/verticalPadding'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '../text'
import { borderRadius } from '../css/borderRadius'
import { absoluteOutline } from '../css/absoluteOutline'
import { getColor } from '../theme/getters'
import { round } from '../css/round'

type MenuOptionKind = 'regular' | 'alert'

export interface MenuOptionProps {
  icon?: ReactNode
  text: string
  isSelected?: boolean
  onSelect: () => void
  kind?: MenuOptionKind
  view?: MenuView
}

interface ContentProps {
  kind: MenuOptionKind
}

const Content = styled(HStack)<ContentProps>`
  ${transition};
  ${borderRadius.s}
  width: 100%;
  ${verticalPadding(8)};
  align-items: center;
  gap: 12px;

  ${({ kind }) =>
    ({
      regular: css`
        color: ${({ theme }) => theme.colors.text.toCssValue()};
      `,
      alert: css`
        color: ${({ theme }) => theme.colors.alert.toCssValue()};
      `,
    })[kind]};
`

const Outline = styled.div`
  ${absoluteOutline(0, 0)};
  border: 2px solid ${getColor('primary')};
  ${round};
`

export const MenuOption = ({
  text,
  icon,
  onSelect,
  isSelected,
  kind = 'regular',
  view = 'popover',
}: MenuOptionProps) => {
  if (view === 'popover') {
    return (
      <Hoverable verticalOffset={0} onClick={onSelect}>
        <Content kind={kind}>
          <Text style={{ display: 'flex' }}>{icon}</Text>
          <Text>{text}</Text>
        </Content>
      </Hoverable>
    )
  }

  return (
    <Button
      style={{ justifyContent: 'flex-start', height: 56 }}
      kind={kind === 'regular' ? 'secondary' : 'alert'}
      size="l"
      isRounded={true}
      key={text}
      onClick={onSelect}
    >
      <HStack alignItems="center" gap={8}>
        {icon} <Text>{text}</Text>
      </HStack>
      {isSelected && <Outline />}
    </Button>
  )
}
