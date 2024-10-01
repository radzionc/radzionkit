import { ReactNode } from 'react'
import { useBoolean } from '../hooks/useBoolean'
import {
  ComponentWithBackActionProps,
  ComponentWithForwardActionProps,
} from '../props'

type StepTransitionProps = {
  from: (props: ComponentWithForwardActionProps) => ReactNode
  to: (props: ComponentWithBackActionProps) => ReactNode
}

export const StepTransition = ({ from, to }: StepTransitionProps) => {
  const [value, { set: onForward, unset: onBack }] = useBoolean(false)

  return <>{value ? to({ onBack }) : from({ onForward })}</>
}
