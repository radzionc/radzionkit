import { useState, useCallback } from 'react'
import { useEvent } from './useEvent'

export const useFocusedElement = (): Element | null => {
  const [focusedElement, setFocusedElement] = useState<Element | null>(null)

  const setCurrentFocusedElement = useCallback(() => {
    setFocusedElement(document.activeElement)
  }, [])

  useEvent(window, 'focus', setCurrentFocusedElement, true)
  useEvent(window, 'blur', setCurrentFocusedElement, true)

  return focusedElement
}
