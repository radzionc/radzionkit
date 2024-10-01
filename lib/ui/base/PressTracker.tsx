import { PointerEventHandler, ReactNode, useCallback, useState } from 'react'
import { useEvent } from 'react-use'
import { Point } from '../entities/Point'
import { useBoundingBox } from '../hooks/useBoundingBox'
import { useRelativePosition } from '../hooks/useRelativePosition'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'

interface ContainerProps {
  onPointerDown: PointerEventHandler<HTMLElement>
  ref: (node: HTMLElement | null) => void
}

interface ChangeParams {
  position: Point | null
  clientPosition: Point | null
}

interface RenderParams extends ChangeParams {
  props: ContainerProps
}

interface PressTrackerProps {
  render: (props: RenderParams) => ReactNode
  onChange?: (params: ChangeParams) => void
}

export const PressTracker = ({ render, onChange }: PressTrackerProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const box = useBoundingBox(container)

  const [clientPosition, setClientPosition] = useState<Point | null>(null)

  const position = useRelativePosition({ box, clientPosition })

  const handleMove: PointerEventHandler<HTMLElement> = useCallback((event) => {
    setClientPosition({ x: event.clientX, y: event.clientY })
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (onChange) {
      onChange({ position, clientPosition })
    }
  }, [onChange, position, clientPosition])

  const clearPosition = useCallback(() => {
    setClientPosition(null)
  }, [])

  useEvent('pointerup', position ? clearPosition : undefined)
  useEvent('pointercancel', position ? clearPosition : undefined)
  useEvent('pointermove', position ? handleMove : undefined)

  return (
    <>
      {render({
        props: {
          ref: setContainer,
          onPointerDown: handleMove,
        },
        position,
        clientPosition,
      })}
    </>
  )
}
