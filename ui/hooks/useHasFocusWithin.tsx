import { useEffect, RefObject } from 'react'
import { useBoolean } from './useBoolean'

const containsRelatedTarget = ({
  currentTarget,
  relatedTarget,
}: FocusEvent) => {
  if (
    currentTarget instanceof HTMLElement &&
    relatedTarget instanceof HTMLElement
  ) {
    return currentTarget.contains(relatedTarget)
  }

  return false
}

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
