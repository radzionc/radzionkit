import { RefObject } from 'react'
import { useFocusedElement } from './useFocusedElement'

export function useHasFocusWithin(ref: RefObject<HTMLElement>): boolean {
  const focusedElement = useFocusedElement()

  if (!ref.current) return false

  return ref.current === focusedElement || ref.current.contains(focusedElement)
}
