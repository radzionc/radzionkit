import { ReactNode, useState } from 'react'
import { useTimeout } from '../hooks/useTimeout'

type TransitionProps = {
  from: ReactNode
  to: ReactNode
  delay: number
}

export const Transition = ({ from, to, delay }: TransitionProps) => {
  const [hasTransitioned, setHasTransitioned] = useState(false)

  useTimeout(() => {
    setHasTransitioned(true)
  }, delay)

  return <>{hasTransitioned ? to : from}</>
}
