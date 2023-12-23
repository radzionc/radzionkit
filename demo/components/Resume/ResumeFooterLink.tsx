import { transition } from '@radzionkit/ui/css/transition'
import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'
import { getColor } from '@radzionkit/ui/theme/getters'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  icon: ReactNode
  url: string
}

const Container = styled(ExternalLink)`
  color: ${getColor('textSupporting')};
  ${transition};

  :hover {
    color: ${getColor('text')};
  }
`

export const ResumeFooterLink = ({ name, icon, url }: Props) => {
  return (
    <Container to={url}>
      <HStack alignItems="center" gap={8}>
        <Text color="regular">{icon}</Text>
        <Text size={14}>{name}</Text>
      </HStack>
    </Container>
  )
}
