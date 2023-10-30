import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { MenuView } from '.'
import { Hoverable } from '../Hoverable'
import { HStack } from '../Stack'
import { transition } from '../../css/transition'
import { Text } from '../Text'
import { Button } from '../buttons/Button'
import { verticalPadding } from '../../css/verticalPadding'

type MenuOptionKind = 'regular' | 'alert'

export interface MenuOptionProps {
  icon?: ReactNode
  text: string
  onSelect: () => void
  kind?: MenuOptionKind
  view?: MenuView
}

interface ContentProps {
  kind: MenuOptionKind
}

const Content = styled(HStack)<ContentProps>`
  ${transition};
  border-radius: 8px;
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

export const MenuOption = ({
  text,
  icon,
  onSelect,
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
    </Button>
  )
}
