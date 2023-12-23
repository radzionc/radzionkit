import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'
import { Button } from '@radzionkit/ui/buttons/Button'
import { YouTubeIcon } from '@radzionkit/ui/icons/YouTubeIcon'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'

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
