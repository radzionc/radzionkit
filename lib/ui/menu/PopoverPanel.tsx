import {
  ReferenceType,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  autoUpdate,
  flip,
  offset,
  shift,
  FloatingFocusManager,
} from '@floating-ui/react'
import { Panel } from '@lib/ui/css/panel'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

export interface RenderContentParams {
  onClose: () => void
}

type RenderOpenerParams = {
  props: RenderOpenerProps
  isOpen: boolean
}

export interface PopoverPanelProps {
  renderContent: (params: RenderContentParams) => ReactNode
  renderOpener: (params: RenderOpenerParams) => ReactNode
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
    whileElementsMounted: autoUpdate,
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
      {renderOpener({
        isOpen,
        props: { ref: setReference, ...getReferenceProps() },
      })}
      {isOpen && (
        <div
          ref={setFloating}
          style={{ ...floatingStyles, zIndex: 1 }}
          {...getFloatingProps()}
        >
          <FloatingFocusManager modal context={context}>
            <Container padding={12} className={className}>
              {renderContent({ onClose: () => setIsOpen(false) })}
            </Container>
          </FloatingFocusManager>
        </div>
      )}
    </>
  )
}
