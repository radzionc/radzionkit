import { ReactNode, useState } from 'react'

import { ComponentWithValueProps, ValueFinishProps } from '../props'

type ValueTransferProps<T> = {
  from: (props: ValueFinishProps<T>) => ReactNode
  to: (props: ComponentWithValueProps<T>) => ReactNode
}

export function ValueTransfer<T>({ from, to }: ValueTransferProps<T>) {
  const [value, setValue] = useState<T | undefined>(undefined)

  if (value === undefined) {
    return <>{from({ onFinish: setValue })}</>
  }

  return <>{to({ value })}</>
}
