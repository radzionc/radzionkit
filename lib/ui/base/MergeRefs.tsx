import { ReactNode, useMemo } from 'react'
import { mergeRefs } from '@lib/ui/utils/mergeRefs'
import { useArrayMemo } from '../hooks/useArrayMemo'

type MergeRefsProps<T> = {
  refs: (React.Ref<T> | undefined | null)[]
  render: (ref: React.Ref<T>) => ReactNode
}

export function MergeRefs<T>({ refs, render }: MergeRefsProps<T>) {
  const memoizedRefs = useArrayMemo(refs)
  const ref = useMemo(() => mergeRefs<T>(...memoizedRefs), [memoizedRefs])

  return <>{render(ref)}</>
}
