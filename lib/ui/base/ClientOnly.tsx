import { useEffect, useState } from 'react'
import { ComponentWithChildrenProps } from '../props'

type ClientOnlyProps = ComponentWithChildrenProps & {
  placeholder?: React.ReactNode
}

export const ClientOnly = ({
  children,
  placeholder = null,
}: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <>{placeholder}</>
  }

  return <>{children}</>
}
