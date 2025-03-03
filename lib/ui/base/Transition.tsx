import { Transition as TransitionType } from '@lib/utils/entities/Transition'
import { ReactNode, useState } from 'react'

import { useTimeout } from '../hooks/useTimeout'

type TransitionProps = TransitionType<ReactNode> & {
  delay: number
}

export const Transition = ({ from, to, delay }: TransitionProps) => {
  const [hasTransitioned, setHasTransitioned] = useState(false)

  useTimeout(() => {
    setHasTransitioned(true)
  }, delay)

  return <>{hasTransitioned ? to : from}</>
}
