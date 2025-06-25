import { isEmpty } from '@lib/utils/array/isEmpty'
import { without } from '@lib/utils/array/without'
import { Ref, RefCallback } from 'react'

export const mergeRefs = <T>(
  ...refs: (Ref<T> | undefined | null)[]
): Ref<T> | RefCallback<T> => {
  const definedRefs = without(refs, null, undefined)
  if (isEmpty(definedRefs)) {
    return null
  }

  return (targetRef) => {
    definedRefs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(targetRef)
      } else {
        ref.current = targetRef
      }
    })
  }
}
