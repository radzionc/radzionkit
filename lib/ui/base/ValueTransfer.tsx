import { ReactNode, useState } from 'react'

import { ValueProp, OnFinishProp } from '../props'

type ValueTransferProps<T> = {
  from: (props: OnFinishProp<T>) => ReactNode
  to: (props: ValueProp<T>) => ReactNode
}

export function ValueTransfer<T>({ from, to }: ValueTransferProps<T>) {
  const [value, setValue] = useState<T | undefined>(undefined)

  if (value === undefined) {
    return <>{from({ onFinish: setValue } as OnFinishProp<T>)}</>
  }

  return <>{to({ value })}</>
}
