import { updateAtIndex } from '@lib/utils/array/updateAtIndex'
import { useCallback } from 'react'

import { useNavigation } from '../state'
import { View } from '../View'

type NavigateOptions = {
  replace?: boolean
}

export function useNavigate<T extends View = View>() {
  const [, setState] = useNavigation()

  return useCallback(
    (entry: T, options: NavigateOptions = {}) => {
      const { id, state } = entry
      const { replace } = options

      setState((prev) => {
        if (replace) {
          return {
            ...prev,
            history: updateAtIndex(prev.history, prev.currentIndex, () => ({
              id,
              state,
            })),
          }
        }

        const newHistory = [...prev.history, { id, state }]

        return {
          history: newHistory,
          currentIndex: newHistory.length - 1,
        }
      })
    },
    [setState],
  )
}
