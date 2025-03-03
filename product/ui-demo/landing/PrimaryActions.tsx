import { Button } from '@lib/ui/buttons/Button'
import { HStack } from '@lib/ui/css/stack'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import Link from 'next/link'

import { Path } from '../navigation/Path'
import { productGitHubUrl } from '../product/resources'

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
