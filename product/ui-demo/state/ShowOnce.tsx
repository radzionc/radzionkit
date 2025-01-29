import { ChildrenProp } from '@lib/ui/props'
import { useEffect } from 'react'
import { PersistentStateKey, usePersistentState } from './persistentState'

interface ShowOnceProps extends ChildrenProp {
  storageKey: PersistentStateKey
}

export const ShowOnce = ({ children, storageKey }: ShowOnceProps) => {
  const [wasShownAt, setShowTime] = usePersistentState<number | null>(
    storageKey,
    null,
  )

  useEffect(() => {
    return () => {
      setShowTime(Date.now())
    }
  }, [setShowTime])

  return wasShownAt ? null : <>{children}</>
}
