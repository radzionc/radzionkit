import { Text } from '@reactkit/ui/ui/Text'
import { Path } from './Path'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={Path.Home}>
      <Text size={18} color="regular" weight="bold">
        React
        <Text as="span" color="primary">
          Kit
        </Text>
      </Text>
    </Link>
  )
}
