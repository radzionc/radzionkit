import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Button } from '@lib/ui/buttons/Button'
import { YouTubeIcon } from '@lib/ui/icons/YouTubeIcon'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'

interface Props {
  videoId: string
}

export const YouTubeLink = ({ videoId }: Props) => {
  return (
    <ExternalLink to={`https://youtu.be/${videoId}`}>
      <Button kind="ghostSecondary">
        <HStack alignItems="center" gap={6}>
          <YouTubeIcon />
          <Text>watch on YouTube</Text>
        </HStack>
      </Button>
    </ExternalLink>
  )
}
