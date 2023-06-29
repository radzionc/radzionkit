import { useFloating, offset, flip, shift, size, autoUpdate } from '@floating-ui/react'
import { getCSSUnit } from 'lib/ui/utils/getCSSUnit'
import { zIndex } from 'lib/ui/zIndex'
import React, { useRef } from 'react'
import { useClickAway } from 'react-use'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  menu?: React.ReactNode
  onClickOutside?: () => void
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const DropdownMenu = styled.div`
  z-index: ${zIndex.menu};
`

export const DropdownMenuPlacer = ({
  children,
  menu,
  onClickOutside,
}: Props) => {
  const wrapperElement = useRef<HTMLDivElement>(null)
  const { refs, strategy, x, y } = useFloating({
    placement: 'bottom-start',
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: getCSSUnit(rects.reference.width),
          })
        },
      }),
    ],
  })

  useClickAway(wrapperElement, () => onClickOutside?.())

  return (
    <Container ref={wrapperElement}>
      <Container ref={refs.setReference}>{children}</Container>
      <DropdownMenu
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        ref={refs.setFloating}
      >
        {menu}
      </DropdownMenu>
    </Container>
  )
}
