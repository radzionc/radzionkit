import { ReactNode } from 'react'

import { useBoolean } from '../hooks/useBoolean'

interface RenderParams {
  src: string
  onError: () => void
}

interface Props {
  src?: string
  fallback?: ReactNode
  render: (params: RenderParams) => ReactNode
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
