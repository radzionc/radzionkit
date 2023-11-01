import { useCallback, useEffect, useRef } from 'react'
import { Burger } from './Burger'

interface Props {
  onOpenSidebarRequest: () => void
}

const TOUCH_AREA_INTERACTIVE_X = 40

export const SidebarOpener = ({ onOpenSidebarRequest }: Props) => {
  const activeTouchX = useRef<number | null>(null)

  const cancelTouchTracking = useCallback(() => {
    activeTouchX.current = null
  }, [])

  useEffect(() => {
    const handleTouchStart = ({ changedTouches }: TouchEvent) => {
      if (!changedTouches.length) return

      const { clientX } = changedTouches[0]
      // only consider touches started close to the left side of the screen
      if (clientX > TOUCH_AREA_INTERACTIVE_X) return

      activeTouchX.current = clientX
    }

    document.addEventListener('touchstart', handleTouchStart)

    return () => document.removeEventListener('touchstart', handleTouchStart)
  }, [])

  useEffect(() => {
    document.addEventListener('touchend', cancelTouchTracking)

    return () => document.removeEventListener('touchend', cancelTouchTracking)
  }, [cancelTouchTracking])

  useEffect(() => {
    document.addEventListener('touchcancel', cancelTouchTracking)

    return () =>
      document.removeEventListener('touchcancel', cancelTouchTracking)
  }, [cancelTouchTracking])

  useEffect(() => {
    const handleTouchMove = ({ changedTouches }: TouchEvent) => {
      if (activeTouchX.current === null || !changedTouches.length) return

      const { clientX } = changedTouches[0]
      if (clientX > activeTouchX.current) {
        onOpenSidebarRequest()
        cancelTouchTracking()
      }
    }

    document.addEventListener('touchmove', handleTouchMove)

    return () => document.removeEventListener('touchmove', handleTouchMove)
  }, [cancelTouchTracking, onOpenSidebarRequest])

  return <Burger onClick={onOpenSidebarRequest} />
}
