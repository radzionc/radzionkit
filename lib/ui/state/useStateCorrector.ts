import { Dispatch, SetStateAction, useEffect, useMemo } from 'react'

export const useStateCorrector = <T>(
  [state, setState]: [T, Dispatch<SetStateAction<T>>],
  correct: (state: T) => T,
): [T, Dispatch<SetStateAction<T>>] => {
  const correctState = useMemo(() => correct(state), [state, correct])

  useEffect(() => {
    if (correctState !== state) {
      setState(correctState)
    }
  }, [correctState, setState, state])

  return [correctState, setState]
}
