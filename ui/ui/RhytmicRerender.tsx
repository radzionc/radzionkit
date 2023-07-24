import { ReactNode } from 'react'
import { useRhythmicRerender } from './hooks/useRhythmicRerender'

interface RhytmicRerenderProps {
  interval?: number
  render: () => ReactNode
}

export const RhytmicRerender = ({ interval, render }: RhytmicRerenderProps) => {
  useRhythmicRerender(interval)

  return <>{render()}</>
}
