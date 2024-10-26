import { useCallback, useEffect } from 'react'
import { hasWindow } from '../utils/window'

type Key = string

interface UseKeyPressOptions {
  isEnabled?: boolean
  shouldStopPropagation?: boolean
  shouldPreventDefault?: boolean
  target?: HTMLElement | Window | Document
}

export const useKeyDown = (
  keys: Key | Key[],
  handler?: (event: KeyboardEvent) => void,
  options: UseKeyPressOptions = {},
) => {
  const {
    isEnabled = true,
    shouldStopPropagation = false,
    shouldPreventDefault = false,
    target = hasWindow ? window : undefined,
  } = options

  const handleKeyDown = useCallback(
    (event: Event) => {
      const keyboardEvent = event as KeyboardEvent

      if (!('key' in keyboardEvent)) return

      const keyList = Array.isArray(keys) ? keys : [keys]

      if (!keyList.includes(keyboardEvent.key)) return

      if (shouldStopPropagation) {
        event.stopPropagation()
      }

      if (shouldPreventDefault) {
        event.preventDefault()
      }

      handler?.(keyboardEvent)
    },
    [handler, keys, shouldStopPropagation, shouldPreventDefault],
  )

  useEffect(() => {
    if (!isEnabled || !target) return

    target.addEventListener('keydown', handleKeyDown)

    return () => {
      target.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, isEnabled, target])
}
