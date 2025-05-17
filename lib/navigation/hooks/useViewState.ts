import { getLastItem } from '@lib/utils/array/getLastItem'
import { updateAtIndex } from '@lib/utils/array/updateAtIndex'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { useNavigation } from '../state'

export function useViewState<T = any>(): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useNavigation()
  const currentState = getLastItem(state.history).state as T

  const setViewState = useCallback(
    (newState: SetStateAction<T>) => {
      setState((prev) => {
        const oldView = getLastItem(prev.history)
        const state =
          typeof newState === 'function'
            ? (newState as (prevState: T) => T)(oldView.state)
            : newState

        const view = { ...oldView, state }

        const history = updateAtIndex(
          prev.history,
          prev.history.length - 1,
          () => view,
        )

        return {
          ...prev,
          history,
        }
      })
    },
    [setState],
  )

  return [currentState, setViewState]
}
