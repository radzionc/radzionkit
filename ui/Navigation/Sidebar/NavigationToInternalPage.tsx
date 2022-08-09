import { useLocation } from 'react-router'
import { InternalLink } from 'router/Link/InternalLink'

import { navigationPathInfo } from 'ui/Navigation/navigationPathInfo'
import { NavigationItem } from './NavigationItem'

interface Props {
  path: keyof typeof navigationPathInfo
}

export const NavigationToInternalPage = ({ path }: Props) => {
  const { pathname } = useLocation()

  const { name, icon } = navigationPathInfo[path]
  
  return (
    <InternalLink to={path}>
      <NavigationItem
        icon={icon}
        name={name}
        isActive={pathname.includes(path)}
      />
    </InternalLink>
  )
}
