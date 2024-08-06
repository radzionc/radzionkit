import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'

type NonNullableSetStateAction<T> = T | null | ((prevState: T) => T)

export const usePresentState = <T>([state, setState]: [
  T | null,
  Dispatch<SetStateAction<T | null>>,
]): [T, Dispatch<NonNullableSetStateAction<T>>] => {
  const presentState = useMemo(() => shouldBePresent(state), [state])

  const setPresentState: Dispatch<NonNullableSetStateAction<T>> = useCallback(
    (newStateOrUpdater) => {
      if (newStateOrUpdater === null) {
        setState(null)
      } else if (typeof newStateOrUpdater === 'function') {
        setState((prevState) => {
          const presentPrevState = shouldBePresent(prevState)
          return (newStateOrUpdater as (prev: T) => T)(presentPrevState)
        })
      } else {
        setState(shouldBePresent(newStateOrUpdater))
      }
    },
    [setState],
  )

  return [presentState, setPresentState]
}
