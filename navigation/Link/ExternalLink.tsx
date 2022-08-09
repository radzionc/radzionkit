import { UnstyledAnchor } from './UnstyledAnchor'

type Props = React.ComponentProps<typeof UnstyledAnchor> & {
  to: string
  openInSameTab?: boolean
  isReferring?: boolean
}

export const ExternalLink = ({
  to,
  openInSameTab = false,
  isReferring = false,
  ...rest
}: Props) => {
  return (
    <UnstyledAnchor
      target={openInSameTab ? undefined : '_blank'}
      rel={`noopener${!isReferring && ' noreferrer'}`}
      href={to}
      {...rest}
    />
  )
}
