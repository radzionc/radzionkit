import { ReactNode, useCallback, useState } from 'react'
import { Point } from '../entities/Point'
import { useBoundingBox } from '../hooks/useBoundingBox'
import { useRelativePosition } from '../hooks/useRelativePosition'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'
import { WindowPointerMoveListener } from './WindowPointerMoveListener'
import { useValueRef } from '../hooks/useValueRef'

type PointerHandler = (event: Pick<PointerEvent, 'clientX' | 'clientY'>) => void

interface ContainerProps {
  onPointerDown: PointerHandler
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

  const handleMove: PointerHandler = useCallback((event) => {
    setClientPosition({ x: event.clientX, y: event.clientY })
  }, [])

  const onChangeRef = useValueRef(onChange)

  useIsomorphicLayoutEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current({ position, clientPosition })
    }
  }, [position, clientPosition])

  const clearPosition = useCallback(() => {
    setClientPosition(null)
  }, [])

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
      {position && (
        <WindowPointerMoveListener onStop={clearPosition} onMove={handleMove} />
      )}
    </>
  )
}
