import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Button } from '@lib/ui/buttons/Button'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { HStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'

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
