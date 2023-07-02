import { ExternalLink } from "lib/navigation/Link/ExternalLink"
import { Button } from "lib/ui/buttons/Button"
import { YouTubeIcon } from "lib/ui/icons/YouTubeIcon"
import { HStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"

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
