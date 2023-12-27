import { useEffect, RefObject } from 'react'
import { useBoolean } from './useBoolean'
import { containsRelatedTarget } from '../utils/containsRelatedTarget'

export function useHasFocusWithin(ref: RefObject<HTMLElement>): boolean {
  const [isFocused, { set: focus, unset: blur }] = useBoolean(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleFocusOut = (event: FocusEvent) => {
      if (!containsRelatedTarget(event)) {
        blur()
      }
    }

    element.addEventListener('focusin', focus)
    element.addEventListener('focusout', handleFocusOut)

    return () => {
      element.removeEventListener('focusin', focus)
      element.removeEventListener('focusout', handleFocusOut)
    }
  }, [blur, focus, ref])

  return isFocused
}
