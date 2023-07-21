import {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  TouchEvent,
  TouchEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react"
import { useEvent } from "react-use"
import { Point } from "../entities/Point"
import { useBoundingBox } from "../shared/hooks/useBoundingBox"
import { enforceRange } from "../shared/utils/enforceRange"

interface ContainerProps {
  onMouseDown: MouseEventHandler<HTMLElement>
  onTouchStart: TouchEventHandler<HTMLElement>
  ref: (node: HTMLElement | null) => void
}

interface ChangeParams {
  position: Point | null
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
    [box]
  )

  const handleMouse = useCallback(
    (event: MouseEvent) => {
      handleMove({ x: event.clientX, y: event.clientY })
    },
    [handleMove]
  )

  const handleTouch = useCallback(
    (event: TouchEvent) => {
      const touch = event.touches[0]
      if (touch) {
        handleMove({ x: touch.clientX, y: touch.clientY })
      }
    },
    [handleMove]
  )

  useEffect(() => {
    if (onChange) {
      onChange({ position })
    }
  }, [onChange, position])

  const clearPosition = useCallback(() => {
    setPosition(null)
  }, [])
  useEvent("mouseup", position ? clearPosition : undefined)
  useEvent("touchend", position ? clearPosition : undefined)
  useEvent("mousemove", position ? handleMouse : undefined)
  useEvent("touchmove", position ? handleTouch : undefined)

  return (
    <>
      {render({
        props: {
          ref: setContainer,
          onMouseDown: handleMouse,
          onTouchStart: handleTouch,
        },
        position: position,
      })}
    </>
  )
}
