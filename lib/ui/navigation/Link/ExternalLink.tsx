import { UnstyledAnchor } from './UnstyledAnchor'

export type ExternalLinkProps = React.ComponentProps<typeof UnstyledAnchor> & {
  to: string
  openInSameTab?: boolean
  isReferring?: boolean
}

export const ExternalLink = ({
  to,
  openInSameTab = false,
  isReferring = false,
  ...rest
}: ExternalLinkProps) => {
  return (
    <UnstyledAnchor
      target={openInSameTab ? undefined : '_blank'}
      rel={isReferring ? undefined : 'noopener noreferrer'}
      href={to}
      {...rest}
    />
  )
}
