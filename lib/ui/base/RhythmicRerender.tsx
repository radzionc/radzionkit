import { RenderProp } from '@lib/ui/props'

import { useRhythmicRerender } from '../hooks/useRhythmicRerender'

interface RhythmicRerenderProps extends RenderProp<number> {
  interval?: number
}

export const RhythmicRerender = ({
  interval,
  render,
}: RhythmicRerenderProps) => {
  const now = useRhythmicRerender(interval)

  return <>{render(now)}</>
}
