import { InternalLink } from 'navigation/InternalLink'
import { useRouter } from 'next/router'

import { NavigationItem } from '../lib/ui/Navigation/Sidebar/NavigationItem'

interface Props {
  path: string
  name: string
}

export const NavigationToInternalPage = ({ path, name }: Props) => {
  const router = useRouter()

  return (
    <InternalLink to={path}>
      <NavigationItem name={name} isActive={router.asPath === path} />
    </InternalLink>
  )
}
