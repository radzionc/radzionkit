import { useWindowEvent } from '../hooks/useEvent'

type WindowPointerMoveListenerProps = {
  onMove: (event: PointerEvent) => void
  onStop: (event: PointerEvent) => void
}
export const WindowPointerMoveListener = ({
  onMove,
  onStop,
}: WindowPointerMoveListenerProps) => {
  useWindowEvent('pointerup', onStop)
  useWindowEvent('pointercancel', onStop)
  useWindowEvent('pointermove', onMove)

  return null
}
