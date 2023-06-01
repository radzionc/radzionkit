import { ExternalLink } from 'lib/navigation/Link/ExternalLink'
import { GhostButton } from 'lib/ui/buttons/rect/GhostButton'
import { GitHubIcon } from 'lib/ui/icons/GitHubIcon'
import { HStack } from 'lib/ui/Stack'
import { Text } from 'lib/ui/Text'

interface Props {
  to: string
}

export const SourceCodeLink = ({ to }: Props) => {
  return (
    <ExternalLink to={to}>
      <GhostButton kind="secondary">
        <HStack alignItems="center" gap={6}>
          <Text as="span" color="regular">
            <GitHubIcon />
          </Text>
          <Text>source code</Text>
        </HStack>
      </GhostButton>
    </ExternalLink>
  )
}
