import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { Button } from '@radzionkit/ui/buttons/Button'
import { GitHubIcon } from '@radzionkit/ui/icons/GitHubIcon'
import { Path } from 'navigation/Path'
import Link from 'next/link'
import { productGitHubUrl } from 'product/resources'

export const PrimaryActions = () => {
  return (
    <HStack gap={16} alignItems="center">
      <Link href={Path.Button}>
        <Button kind="secondary">Demo</Button>
      </Link>
      <ExternalLink to={productGitHubUrl}>
        <Button kind="reversed">
          <HStack alignItems="center" gap={8}>
            <GitHubIcon />
            GitHub
          </HStack>
        </Button>
      </ExternalLink>
    </HStack>
  )
}
