import { DependencyList, ReactNode } from 'react'
import { useEffectOnDependencyChange } from '../hooks/useEffectOnDependencyChange'
import { useTimeoutState } from '../hooks/useTimeoutState'

interface TimeoutMessageProps {
  render: () => ReactNode
  timeout: number
  deps: DependencyList
}

export const TimeoutMessage = ({
  render,
  timeout,
  deps,
}: TimeoutMessageProps) => {
  const [shouldShowMessage, setShouldShowMessage] = useTimeoutState(
    false,
    timeout,
  )

  useEffectOnDependencyChange(() => {
    setShouldShowMessage(true)
  }, deps)

  return shouldShowMessage ? <>{render()}</> : null
}
