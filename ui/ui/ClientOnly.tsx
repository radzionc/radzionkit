import { useEffect, useState } from 'react'
import { ComponentWithChildrenProps } from '../shared/props'

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
