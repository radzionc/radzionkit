import { ReactNode, useState } from "react"
import {
  ReferenceType, offset, shift, flip, useFloating, autoUpdate, useInteractions, useHover, useFocus, useDismiss, useRole
} from '@floating-ui/react'
import styled from "styled-components"
import { getColor } from "./theme/getters"

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

interface TooltipProps {
  tooltip: ReactNode
  renderOpener: (props: RenderOpenerProps) => ReactNode
}

const Container = styled.div`
border-radius: 8px;
background: ${getColor('contrast')};
color: ${getColor('background')};
padding: 4px 8px;
font-size: 14px;
`

export const Tootlip = ({ tooltip, renderOpener }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs: { setReference, setFloating },
    floatingStyles, context
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      {renderOpener({ ref: setReference, ...getReferenceProps() })}
      {isOpen && (
        <Container
          ref={setFloating}
          style={{ ...floatingStyles, zIndex: 1 }}
          {...getFloatingProps()}
        >
          {tooltip}
        </Container>
      )}
    </>
  )
}