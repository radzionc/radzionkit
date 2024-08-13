import { ReactNode } from 'react'
import { useRhythmicRerender } from '../hooks/useRhythmicRerender'

interface RhythmicRerenderProps {
  interval?: number
  render: (now: number) => ReactNode
}

export const RhytmicRerender = ({
  interval,
  render,
}: RhythmicRerenderProps) => {
  const now = useRhythmicRerender(interval)

  return <>{render(now)}</>
}
