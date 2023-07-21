import Link from 'next/link'

import { UnstyledAnchor } from '../../ui/navigation/Link/UnstyledAnchor'

type Props = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  to: string
}

export const InternalLink = ({ to, children, ...rest }: Props) => {
  return (
    <Link href={to} {...rest}>
      <UnstyledAnchor>{children}</UnstyledAnchor>
    </Link>
  )
}
