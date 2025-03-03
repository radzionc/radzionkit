import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { HStack, VStack } from '@lib/ui/css/stack'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { CoverImage } from '@lib/ui/images/CoverImage'
import { SafeImage } from '@lib/ui/images/SafeImage'
import { getColor } from '@lib/ui/theme/getters'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { ChildrenProp } from '../props'

const Container = styled(VStack)`
  gap: 16px;
  max-width: 620px;
  line-height: 1.5;
`

const Image = styled(CoverImage)`
  ${sameDimensions(64)}
  ${round};
  border: 2px solid ${getColor('primary')};
  @media (max-width: 600px) {
    ${sameDimensions(36)}
  }
`

const SignutureWrapper = styled(IconWrapper)`
  color: ${getColor('contrast')};
  font-size: 32px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

type FoundersNoteProps = ChildrenProp & {
  avatarUrl: string
  signature: ReactNode
}

export const FoundersNote = ({
  children,
  avatarUrl,
  signature,
}: FoundersNoteProps) => {
  return (
    <Container>
      {children}
      <HStack gap={20} alignItems="center">
        <SafeImage
          fallback={null}
          src={avatarUrl}
          render={(props) => <Image alt="Founder" {...props} />}
        />
        <SignutureWrapper>{signature}</SignutureWrapper>
      </HStack>
    </Container>
  )
}
