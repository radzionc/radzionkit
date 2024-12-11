import { isEmpty } from '@lib/utils/array/isEmpty'
import { withoutNullOrUndefined } from '@lib/utils/array/withoutNullOrUndefined'
import { Ref, RefCallback } from 'react'

export const mergeRefs = <T>(
  ...refs: (Ref<T> | undefined | null)[]
): Ref<T> | RefCallback<T> => {
  const definedRefs = withoutNullOrUndefined(refs)
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
