import { useState, useCallback } from 'react'

import { useWindowEvent } from './useEvent'

export const useFocusedElement = (): Element | null => {
  const [focusedElement, setFocusedElement] = useState<Element | null>(null)

  const setCurrentFocusedElement = useCallback(() => {
    setFocusedElement(document.activeElement)
  }, [])

  useWindowEvent('focus', setCurrentFocusedElement, true)
  useWindowEvent('blur', setCurrentFocusedElement, true)

  return focusedElement
}
