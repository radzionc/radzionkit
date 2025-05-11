import { useCallback } from 'react'

import { useNavigation } from '../state'

export const useNavigateBack = () => {
  const [, setState] = useNavigation()

  return useCallback(() => {
    setState((state) => {
      if (state.currentIndex <= 0) {
        return state
      }

      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      }
    })
  }, [setState])
}
