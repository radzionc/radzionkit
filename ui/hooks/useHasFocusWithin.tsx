import { useEffect, RefObject, useState } from 'react'

export function useHasFocusWithin(ref: RefObject<HTMLElement>): boolean {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const node = ref.current

    const handleFocusIn = (event: FocusEvent) => {
      if (node && node.contains(event.target as Node)) {
        setIsFocused(true)
      }
    }

    const handleFocusOut = (event: FocusEvent) => {
      if (node && !node.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [ref])

  return isFocused
}
