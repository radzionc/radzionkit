import { useState, useEffect } from 'react'

export const useFocusedElement = (): Element | null => {
  const [focusedElement, setFocusedElement] = useState<Element | null>(null)

  useEffect(() => {
    const updateFocusedElement = () => setFocusedElement(document.activeElement)

    window.addEventListener('focus', updateFocusedElement, true)

    updateFocusedElement()

    return () => {
      window.removeEventListener('focus', updateFocusedElement, true)
    }
  }, [])

  return focusedElement
}
