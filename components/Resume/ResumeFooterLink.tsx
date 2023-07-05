import { ExternalLink } from "lib/navigation/Link/ExternalLink"
import { defaultTransitionCSS } from "lib/ui/animations/transitions"
import { HStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"
import { getColor } from "lib/ui/theme/getters"
import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  name: string
  icon: ReactNode
  url: string
}

const Container = styled(ExternalLink)`
  color: ${getColor("textSupporting")};
  ${defaultTransitionCSS};

  :hover {
    color: ${getColor("text")};
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
