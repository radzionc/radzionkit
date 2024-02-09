import { ReactNode, useEffect, useState } from 'react'
import { InputProps } from '../props'

type InputDebounceProps<T> = InputProps<T> & {
  render: (props: InputProps<T>) => ReactNode
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
    const timeout = setTimeout(() => {
      onChange(currentValue)
    }, interval)

    return () => clearTimeout(timeout)
  }, [currentValue, onChange, interval])

  return (
    <>
      {render({
        value: currentValue,
        onChange: setCurrentValue,
      })}
    </>
  )
}
