import { Dispatch, SetStateAction, useCallback } from 'react'

import { useNavigation } from '../state'

export function useViewState<T = any>(): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useNavigation()
  const currentState = state.history[state.currentIndex].state as T

  const setRouteState = useCallback(
    (newState: SetStateAction<T>) => {
      setState((prev) => {
        const id = prev.history[prev.currentIndex].id
        const state =
          typeof newState === 'function'
            ? (newState as (prevState: T) => T)(
                prev.history[prev.currentIndex].state,
              )
            : newState

        const history = [...prev.history, { id, state }]

        return {
          ...prev,
          history,
          currentIndex: history.length - 1,
        }
      })
    },
    [setState],
  )

  return [currentState, setRouteState]
}
