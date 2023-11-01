import { useEffect, useState } from 'react'
import { ComponentWithChildrenProps } from '../props'

export const ClientOnly = ({ children }: ComponentWithChildrenProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
