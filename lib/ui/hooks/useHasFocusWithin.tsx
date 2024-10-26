import { RefObject, useCallback } from 'react'
import { useBoolean } from './useBoolean'
import { containsRelatedTarget } from '../utils/containsRelatedTarget'
import { useEvent } from './useEvent'

export function useHasFocusWithin(ref: RefObject<HTMLElement>): boolean {
  const [isFocused, { set: focus, unset: blur }] = useBoolean(false)

  useEvent(ref.current, 'focusin', focus)

  useEvent(
    ref.current,
    'focusout',
    useCallback(
      (event: FocusEvent) => {
        if (!containsRelatedTarget(event)) {
          blur()
        }
      },
      [blur],
    ),
  )

  return isFocused
}
