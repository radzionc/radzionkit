import { useEffect, useState } from 'react'
import { ChildrenProp } from '../props'

type ClientOnlyProps = ChildrenProp & {
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
