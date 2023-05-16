import { ComponentWithChildrenProps } from 'lib/shared/props'
import { useEffect } from 'react'
import { PersistentStorageKey, usePersistentStorageValue } from 'state/persistentStorage'

interface ShowOnceProps extends ComponentWithChildrenProps {
  storageKey: PersistentStorageKey
}

export const ShowOnce = ({ children, storageKey }: ShowOnceProps) => {
  const [wasShownAt, setShowTime] = usePersistentStorageValue<
    number | undefined
  >(storageKey, undefined)

  useEffect(() => {
    return () => {
      setShowTime(Date.now())
    }
  }, [setShowTime])

  return wasShownAt ? null : <>{children}</>
}
