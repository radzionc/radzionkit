import { DependencyList, ReactNode } from 'react'

import { useRunOnChange } from '../hooks/useRunOnChange'
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

  useRunOnChange(() => {
    setShouldShowMessage(true)
  }, deps)

  return shouldShowMessage ? <>{render()}</> : null
}
