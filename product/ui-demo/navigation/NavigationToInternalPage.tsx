import { NavigationItem } from '@lib/ui/navigation/Sidebar/NavigationItem'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
