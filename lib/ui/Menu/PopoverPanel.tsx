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
import FocusTrap from 'focus-trap-react'

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

interface RenderContentParams {
  onClose: () => void
}

export interface PopoverPanelProps {
  renderContent: (params: RenderContentParams) => ReactNode
  renderOpener: (props: RenderOpenerProps) => ReactNode
  className?: string
}

const Container = styled(Panel)`
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background: ${({ theme: { colors, name } }) =>
    (name === 'dark' ? colors.foreground : colors.background).toCssValue()};
  overflow: hidden;
`

export const PopoverPanel = ({
  renderContent,
  renderOpener,
  className,
}: PopoverPanelProps) => {
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
          <FocusTrap
            focusTrapOptions={{
              clickOutsideDeactivates: true,
            }}
          >
            <Container padding={12} className={className}>
              {renderContent({ onClose: () => setIsOpen(false) })}
            </Container>
          </FocusTrap>
        </div>
      )}
    </>
  )
}
