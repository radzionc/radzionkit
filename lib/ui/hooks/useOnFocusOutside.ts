import { RefObject, useEffect } from 'react'
import { containsRelatedTarget } from '../utils/containsRelatedTarget'

export const useOnFocusOutside = (
  ref: RefObject<HTMLElement>,
  onFocusOutside: () => void,
) => {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleFocusOut = (event: FocusEvent) => {
      if (!containsRelatedTarget(event)) {
        onFocusOutside()
      }
    }

    element.addEventListener('focusout', handleFocusOut)

    return () => {
      element.removeEventListener('focusout', handleFocusOut)
    }
  }, [ref, onFocusOutside])
}
