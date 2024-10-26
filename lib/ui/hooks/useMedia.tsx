import { useState, useEffect } from 'react'
import { hasWindow } from '../utils/window'

export const useMedia = (query: string, defaultState: boolean): boolean => {
  const [state, setState] = useState<boolean>(defaultState)

  useEffect(() => {
    if (!hasWindow || !window.matchMedia) {
      return
    }

    const mediaQueryList = window.matchMedia(query)

    setState(mediaQueryList.matches)

    const listener = (event: MediaQueryListEvent) => {
      setState(event.matches)
    }

    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [query])

  return state
}
