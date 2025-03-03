import { useCallback } from 'react'

import { useWindowEvent } from './useEvent'

export const useOnWindowCloseAlert = (message: string, isEnabled = true) => {
  useWindowEvent(
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
