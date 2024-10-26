import { useCallback } from 'react'
import { useEvent } from './useEvent'

export const useOnWindowCloseAlert = (message: string, isEnabled = true) => {
  useEvent(
    window,
    'beforeunload',
    useCallback(
      (event: BeforeUnloadEvent) => {
        if (!isEnabled) return

        event.returnValue = message
        return message
      },
      [isEnabled, message],
    ),
  )
}
