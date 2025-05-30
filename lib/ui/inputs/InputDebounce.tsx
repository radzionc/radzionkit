import { RenderProp } from '@lib/ui/props'
import { useEffect, useState } from 'react'

import { InputProps } from '../props'

type InputDebounceProps<T> = InputProps<T> &
  RenderProp<InputProps<T>> & {
    interval?: number
  }

export function InputDebounce<T>({
  value,
  onChange,
  interval = 300,
  render,
}: InputDebounceProps<T>) {
  const [currentValue, setCurrentValue] = useState<T>(value)

  useEffect(() => {
    if (currentValue === value) return

    const timeout = setTimeout(() => {
      onChange(currentValue)
    }, interval)

    return () => clearTimeout(timeout)
  }, [currentValue, interval, onChange, value])

  return (
    <>
      {render({
        value: currentValue,
        onChange: setCurrentValue,
      })}
    </>
  )
}
