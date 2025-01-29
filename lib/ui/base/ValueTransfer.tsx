import { ReactNode, useState } from 'react'

import { ValueProp, OnFinishValueProp } from '../props'

type ValueTransferProps<T> = {
  from: (props: OnFinishValueProp<T>) => ReactNode
  to: (props: ValueProp<T>) => ReactNode
}

export function ValueTransfer<T>({ from, to }: ValueTransferProps<T>) {
  const [value, setValue] = useState<T | undefined>(undefined)

  if (value === undefined) {
    return <>{from({ onFinish: setValue })}</>
  }

  return <>{to({ value })}</>
}
