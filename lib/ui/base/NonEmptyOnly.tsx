import { RenderProp } from '@lib/ui/props'
import { ValueProp } from '@lib/utils/entities/props'

type NonEmptyOnlyProps<T> = Partial<ValueProp<T[]>> & RenderProp<T[]>

export function NonEmptyOnly<T>({ value, render }: NonEmptyOnlyProps<T>) {
  if (value && value.length > 0) {
    return <>{render(value)}</>
  }

  return null
}
