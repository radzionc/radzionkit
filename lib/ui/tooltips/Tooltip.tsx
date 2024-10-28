import { ReactNode, useRef, useState } from 'react'
import {
  ReferenceType,
  offset,
  shift,
  flip,
  useFloating,
  autoUpdate,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  arrow,
  useTransitionStyles,
  Placement,
} from '@floating-ui/react'
import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { borderRadius } from '../css/borderRadius'

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

interface TooltipProps {
  content?: ReactNode
  renderOpener: (props: RenderOpenerProps) => ReactNode
  placement?: Placement
}

const Container = styled.div`
  ${borderRadius.s};
  background: ${getColor('foregroundExtra')};
  border: 1px solid ${getColor('mist')};
  padding: 8px 12px;
  max-width: 320px;
  white-space: initial;
  line-height: 1.5;
`

export const Tooltip = ({ content, renderOpener, placement }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const arrowRef = useRef(null)

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    strategy: 'fixed',
    placement,
    middleware: [
      offset(4),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { styles: transitionStyles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  return (
    <>
      {renderOpener({ ref: setReference, ...getReferenceProps() })}
      {isOpen && content && (
        <div
          ref={setFloating}
          style={{ ...floatingStyles, zIndex: 1 }}
          {...getFloatingProps()}
        >
          <Container style={transitionStyles}>{content}</Container>
        </div>
      )}
    </>
  )
}
