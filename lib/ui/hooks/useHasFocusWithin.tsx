import { RefObject, useCallback } from 'react'

import { containsRelatedTarget } from '../utils/containsRelatedTarget'

import { useBoolean } from './useBoolean'
import { useEvent } from './useEvent'

export function useHasFocusWithin(ref: RefObject<HTMLElement | null>): boolean {
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
