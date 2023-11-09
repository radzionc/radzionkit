import { DependencyList, useEffect, useRef } from 'react'

export const useEffectOnDependencyChange = (
  effect: () => void,
  deps: DependencyList,
) => {
  const prevDeps = useRef(deps)
  useEffect(() => {
    const hasDepsChanged = !prevDeps.current.every((dep, i) => dep === deps[i])
    if (hasDepsChanged) {
      effect()
      prevDeps.current = deps
    }
  }, [deps, effect])
}
