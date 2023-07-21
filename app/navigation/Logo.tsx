import { InternalLink } from 'navigation/InternalLink'
import { Text } from '@reactkit/ui/ui/Text'
import { Path } from './Path'

export const Logo = () => {
  return (
    <InternalLink to={Path.Home}>
      <Text size={18} color="regular" weight="bold">
        React
        <Text as="span" color="primary">
          Kit
        </Text>
      </Text>
    </InternalLink>
  )
}
