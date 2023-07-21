import { ExternalLink } from '@reactkit/ui/navigation/Link/ExternalLink'
import { Button } from '@reactkit/ui/ui/buttons/Button'
import { GitHubIcon } from '@reactkit/ui/ui/icons/GitHubIcon'
import { HStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'

interface Props {
  to: string
}

export const SourceCodeLink = ({ to }: Props) => {
  return (
    <ExternalLink to={to}>
      <Button as="div" kind="ghostSecondary">
        <HStack alignItems="center" gap={6}>
          <GitHubIcon />
          <Text>source code</Text>
        </HStack>
      </Button>
    </ExternalLink>
  )
}
