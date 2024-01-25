import {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
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

  const [position, setPosition] = useState<Point | null>(null)

  const handleMove = useCallback(
    ({ x, y }: Point) => {
      if (!box) return

      const { left, top, width, height } = box

      setPosition({
        x: enforceRange((x - left) / width, 0, 1),
        y: enforceRange((y - top) / height, 0, 1),
      })
    },
    [box],
  )

  const handleMouse = useCallback(
    (event: MouseEvent) => {
      handleMove({ x: event.clientX, y: event.clientY })
    },
    [handleMove],
  )

  useIsomorphicLayoutEffect(() => {
    if (onChange) {
      onChange({ position })
    }
  }, [onChange, position])

  return (
    <>
      {render({
        props: {
          ref: setContainer,
          onMouseEnter: handleMouse,
          onMouseLeave: position
            ? () => {
                setPosition(null)
              }
            : undefined,
          onMouseMove: position ? handleMouse : undefined,
        },
        position: position,
      })}
    </>
  )
}
