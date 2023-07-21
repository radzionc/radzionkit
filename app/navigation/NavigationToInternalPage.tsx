import { useRouter } from 'next/router'

import { NavigationItem } from '../../ui/ui/Navigation/Sidebar/NavigationItem'
import Link from 'next/link'

interface Props {
  path: string
  name: string
}

export const NavigationToInternalPage = ({ path, name }: Props) => {
  const router = useRouter()

  return (
    <Link href={path}>
      <NavigationItem name={name} isActive={router.asPath === path} />
    </Link>
  )
}
