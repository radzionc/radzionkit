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
    (view: T, options: NavigateOptions = {}) => {
      const { replace } = options

      setState((prev) => {
        if (replace) {
          return {
            ...prev,
            history: updateAtIndex(
              prev.history,
              prev.history.length - 1,
              () => view,
            ),
          }
        }

        return {
          ...prev,
          history: [...prev.history, view],
        }
      })
    },
    [setState],
  )
}
