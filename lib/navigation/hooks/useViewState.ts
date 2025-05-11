import { updateAtIndex } from '@lib/utils/array/updateAtIndex'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { useNavigation } from '../state'

export function useViewState<T = any>(): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useNavigation()
  const currentState = state.history[state.currentIndex].state as T

  const setRouteState = useCallback(
    (newState: SetStateAction<T>) => {
      setState((prev) => {
        const updatedState =
          typeof newState === 'function'
            ? (newState as (prevState: T) => T)(
                prev.history[prev.currentIndex].state,
              )
            : newState

        return {
          ...prev,
          history: updateAtIndex(prev.history, prev.currentIndex, (entry) => ({
            ...entry,
            state: updatedState,
          })),
        }
      })
    },
    [setState],
  )

  return [currentState, setRouteState]
}
