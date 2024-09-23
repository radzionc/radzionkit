import { haveSameContent } from '@lib/utils/array/haveSameContent'
import { DependencyList, useEffect, useRef } from 'react'

export const useRunOnChange = (effect: () => void, deps: DependencyList) => {
  const prevDeps = useRef(deps)

  useEffect(() => {
    if (haveSameContent(prevDeps.current, deps)) return

    prevDeps.current = deps

    effect()
  }, [deps, effect])
}
