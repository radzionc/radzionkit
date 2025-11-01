import { useState } from 'react'

import { InputProps, RenderProp } from '../props'

type ControlledValueProps<T> = RenderProp<InputProps<T>> & {
  initialValue: T
}

export function ControlledValue<T>({
  initialValue,
  render,
}: ControlledValueProps<T>) {
  const [state, setState] = useState(initialValue)
  return render({ value: state, onChange: setState })
}
