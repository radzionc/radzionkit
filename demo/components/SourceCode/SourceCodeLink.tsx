import { ExternalLink } from '@reactkit/ui/navigation/Link/ExternalLink'
import { Button } from '@reactkit/ui/buttons/Button'
import { GitHubIcon } from '@reactkit/ui/icons/GitHubIcon'
import { HStack } from '@reactkit/ui/layout/Stack'
import { Text } from '@reactkit/ui/text'

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
