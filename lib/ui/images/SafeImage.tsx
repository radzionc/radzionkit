import { RenderProp } from '@lib/ui/props'
import { ReactNode } from 'react'

import { useBoolean } from '../hooks/useBoolean'

interface RenderParams {
  src: string
  onError: () => void
}

interface Props extends RenderProp<RenderParams> {
  src?: string
  fallback?: ReactNode
}

export const SafeImage = ({ fallback = null, src, render }: Props) => {
  const [isFailedToLoad, { set: failedToLoad }] = useBoolean(false)

  return (
    <>
      {isFailedToLoad || !src
        ? fallback
        : render({ onError: failedToLoad, src })}
    </>
  )
}
