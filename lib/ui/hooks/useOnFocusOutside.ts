import { RefObject, useCallback } from 'react'
import { containsRelatedTarget } from '../utils/containsRelatedTarget'
import { useEvent } from './useEvent'

export const useOnFocusOutside = (
  ref: RefObject<HTMLElement>,
  onFocusOutside: () => void,
) => {
  useEvent(
    ref.current,
    'focusout',
    useCallback(
      (event: any) => {
        if (!containsRelatedTarget(event)) {
          onFocusOutside()
        }
      },
      [onFocusOutside],
    ),
  )
}
