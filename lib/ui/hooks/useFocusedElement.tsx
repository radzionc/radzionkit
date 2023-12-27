import { useState, useEffect } from 'react'

export const useFocusedElement = (): Element | null => {
  const [focusedElement, setFocusedElement] = useState<Element | null>(null)
  console.log(focusedElement)

  useEffect(() => {
    const updateFocusedElement = () => setFocusedElement(document.activeElement)

    window.addEventListener('focus', updateFocusedElement, true)
    window.addEventListener('blur', updateFocusedElement, true)

    updateFocusedElement()

    return () => {
      window.removeEventListener('focus', updateFocusedElement, true)
      window.addEventListener('blur', updateFocusedElement, true)
    }
  }, [])

  return focusedElement
}
