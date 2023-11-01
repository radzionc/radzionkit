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
  FloatingArrow,
  useTransitionStyles,
  Placement,
} from '@floating-ui/react'
import styled from 'styled-components'
import { getColor } from '../theme/getters'

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

interface TooltipProps {
  content?: ReactNode
  renderOpener: (props: RenderOpenerProps) => ReactNode
  placement?: Placement
}

const Container = styled.div`
  border-radius: 8px;
  background: ${getColor('contrast')};
  color: ${getColor('background')};
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  max-width: 320px;
`

const Arrow = styled(FloatingArrow)`
  fill: ${getColor('contrast')};
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
    placement,
    middleware: [
      offset(12),
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
          <Container style={transitionStyles}>
            <Arrow tipRadius={2} height={8} ref={arrowRef} context={context} />
            {content}
          </Container>
        </div>
      )}
    </>
  )
}
