import { useState, useEffect } from 'react'

export const useMedia = (query: string, defaultState: boolean): boolean => {
  const [state, setState] = useState<boolean>(defaultState)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
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
