import { useEvent } from '../hooks/useEvent'

type WindowPointerMoveListenerProps = {
  onMove: (event: PointerEvent) => void
  onStop: (event: PointerEvent) => void
}
export const WindowPointerMoveListener = ({
  onMove,
  onStop,
}: WindowPointerMoveListenerProps) => {
  useEvent(window, 'pointerup', onStop)
  useEvent(window, 'pointercancel', onStop)
  useEvent(window, 'pointermove', onMove)

  return null
}
