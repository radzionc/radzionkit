import { useIsomorphicLayoutEffect } from '@lib/ui/hooks/useIsomorphicLayoutEffect'
import { RenderProp } from '@lib/ui/props'
import { Point } from '@lib/utils/entities/Point'
import { MouseEvent, MouseEventHandler, useCallback, useState } from 'react'

import { useBoundingBox } from '../hooks/useBoundingBox'
import { useRelativePosition } from '../hooks/useRelativePosition'

interface ContainerProps {
  onMouseEnter?: MouseEventHandler<HTMLElement>
  onMouseLeave?: MouseEventHandler<HTMLElement>
  onMouseMove?: MouseEventHandler<HTMLElement>
  ref: (node: HTMLElement | null) => void
}

interface ChangeParams {
  position: Point | null
  clientPosition: Point | null
}

interface RenderParams extends ChangeParams {
  props: ContainerProps
}

interface HoverTrackerProps extends RenderProp<RenderParams> {
  onChange?: (params: ChangeParams) => void
}

export const HoverTracker = ({ render, onChange }: HoverTrackerProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const box = useBoundingBox(container)

  const [clientPosition, setClientPosition] = useState<Point | null>(null)

  const position = useRelativePosition({ box, clientPosition })

  const handleMouse = useCallback((event: MouseEvent) => {
    setClientPosition({ x: event.clientX, y: event.clientY })
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (onChange) {
      onChange({ position, clientPosition })
    }
  }, [onChange, position, clientPosition])

  return (
    <>
      {render({
        props: {
          ref: setContainer,
          onMouseEnter: handleMouse,
          onMouseLeave: position
            ? () => {
                setClientPosition(null)
              }
            : undefined,
          onMouseMove: position ? handleMouse : undefined,
        },
        position: position,
        clientPosition,
      })}
    </>
  )
}
