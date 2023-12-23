import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'
import { Button } from '@radzionkit/ui/buttons/Button'
import { GitHubIcon } from '@radzionkit/ui/icons/GitHubIcon'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'

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
