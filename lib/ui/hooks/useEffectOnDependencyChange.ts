import { haveSameContent } from '@lib/utils/array/haveSameContent'
import { DependencyList, useEffect, useRef } from 'react'

export const useEffectOnDependencyChange = (
  effect: () => void,
  deps: DependencyList,
) => {
  const prevDeps = useRef(deps)

  useEffect(() => {
    if (haveSameContent(prevDeps.current, deps)) return

    effect()
    prevDeps.current = deps
  }, [deps, effect])
}
