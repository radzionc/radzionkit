import { isEmpty } from '@lib/utils/array/isEmpty'
import { withoutNullOrUndefined } from '@lib/utils/array/withoutNullOrUndefined'

export const mergeRefs = <T>(
  ...refs: (React.Ref<T> | undefined | null)[]
): React.Ref<T> | React.RefCallback<T> => {
  const definedRefs = withoutNullOrUndefined(refs)
  if (isEmpty(definedRefs)) {
    return null
  }

  return (targetRef) => {
    definedRefs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(targetRef)
      } else {
        const typedRef = ref as React.MutableRefObject<T | null>
        typedRef.current = targetRef
      }
    })
  }
}
