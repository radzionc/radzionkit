import {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { Point } from '../entities/Point'
import { useBoundingBox } from '../hooks/useBoundingBox'
import { enforceRange } from '@lib/utils/enforceRange'
import { useIsomorphicLayoutEffect } from 'react-use'

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

interface HoverTrackerProps {
  render: (props: RenderParams) => ReactNode
  onChange?: (params: ChangeParams) => void
}

export const HoverTracker = ({ render, onChange }: HoverTrackerProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const box = useBoundingBox(container)

  const [clientPosition, setClientPosition] = useState<Point | null>(null)

  const position = useMemo(() => {
    if (!clientPosition) return null

    if (!box) return null

    const { left, top, width, height } = box
    const { x, y } = clientPosition

    return {
      x: enforceRange((x - left) / width, 0, 1),
      y: enforceRange((y - top) / height, 0, 1),
    }
  }, [box, clientPosition])

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
