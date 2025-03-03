import { ReactNode } from 'react'

import { useBoolean } from '../hooks/useBoolean'
import { OnBackProp, OnForwardProp } from '../props'

type StepTransitionProps = {
  from: (props: OnForwardProp) => ReactNode
  to: (props: OnBackProp) => ReactNode
}

export const StepTransition = ({ from, to }: StepTransitionProps) => {
  const [value, { set: onForward, unset: onBack }] = useBoolean(false)

  return <>{value ? to({ onBack }) : from({ onForward })}</>
}
