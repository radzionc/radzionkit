import { useCallback } from 'react'

import { useNavigation } from '../state'

export const useNavigateBack = () => {
  const [, setState] = useNavigation()

  return useCallback(() => {
    setState((state) => {
      if (state.history.length <= 1) {
        return state
      }

      return {
        ...state,
        history: state.history.slice(0, -1),
      }
    })
  }, [setState])
}
