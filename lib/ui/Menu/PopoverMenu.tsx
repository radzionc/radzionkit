import { flip, offset, shift } from '@floating-ui/dom'
import {
  ReferenceType,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

import { Panel } from '../Panel/Panel'
import { HStack, VStack } from '../Stack'
import { Text } from '../Text'
import { SeparatedByLine } from '../SeparatedByLine'
import { CloseIconButton } from '../buttons/square/CloseIconButton'

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

interface RenderContentParams {
  onClose: () => void
}

export interface PopoverMenuProps {
  title: ReactNode

  renderContent: (params: RenderContentParams) => ReactNode
  renderOpener: (props: RenderOpenerProps) => ReactNode
}

const Container = styled(Panel)`
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background: ${({ theme: { colors, name } }) =>
    (name === 'dark' ? colors.foreground : colors.background).toCssValue()};
  overflow: hidden;
  min-width: 260px;
`

const Header = styled(HStack)`
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`

export const PopoverMenu = ({
  renderContent,
  renderOpener,
  title,
}: PopoverMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    floatingStyles,
    refs: { setReference, setFloating },
    context,
  } = useFloating({
    open: isOpen,
    placement: 'bottom-end',
    strategy: 'fixed',
    onOpenChange: setIsOpen,
    middleware: [offset(4), shift(), flip()],
  })

  useDismiss(context)

  const click = useClick(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click])
  return (
    <>
      {renderOpener({ ref: setReference, ...getReferenceProps() })}
      {isOpen && (
        <div
          ref={setFloating}
          style={{ ...floatingStyles, zIndex: 1 }}
          {...getFloatingProps()}
        >
          <Container padding={12}>
            <SeparatedByLine gap={12}>
              <Header>
                <Text weight="semibold" color="supporting" cropped>
                  {title}
                </Text>
                <CloseIconButton onClick={() => setIsOpen(false)} />
              </Header>
              <VStack>
                {renderContent({ onClose: () => setIsOpen(false) })}
              </VStack>
            </SeparatedByLine>
          </Container>
        </div>
      )}
    </>
  )
}
