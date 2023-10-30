import { ExternalLink } from '@reactkit/ui/navigation/Link/ExternalLink'
import { Button } from '@reactkit/ui/buttons/Button'
import { YouTubeIcon } from '@reactkit/ui/ui/icons/YouTubeIcon'
import { HStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'

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
