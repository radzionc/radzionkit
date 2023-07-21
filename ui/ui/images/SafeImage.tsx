import { useBoolean } from 'shared/hooks/useBoolean'
import { ReactNode } from 'react'

interface RenderParams {
  src: string
  onError: () => void
}

interface Props {
  src?: string
  fallback?: ReactNode
  render: (params: RenderParams) => void
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
