import { ReactNode } from 'react'

import { useIsScreenWidthLessThan } from './hooks/useIsScreenWidthLessThan'

interface ResponsiveViewProps {
  small: () => ReactNode
  normal: () => ReactNode
}

const smallScreenWidth = 600

export const ResponsiveView = ({ small, normal }: ResponsiveViewProps) => {
  const isSmallScreen = useIsScreenWidthLessThan(smallScreenWidth)

  return <>{(isSmallScreen ? small : normal)()}</>
}
