import { ExternalLink } from "@reactkit/ui/navigation/Link/ExternalLink"
import { defaultTransitionCSS } from "@reactkit/ui/ui/animations/transitions"
import { HStack, VStack } from "@reactkit/ui/ui/Stack"
import { Text } from "@reactkit/ui/ui/Text"
import { roundedCSS } from "@reactkit/ui/ui/utils/roundedCSS"
import styled from "styled-components"
import { Responsibilities } from "./Responsibilities"
import { getColor } from "@reactkit/ui/ui/theme/getters"

interface Props {
  name: string
  url: string
  description: string
  achievement?: string
  responsibilities?: string[]
}

const Title = styled(Text)`
  border-bottom: 1px solid;
  ${defaultTransitionCSS}
  line-height: 1.24;

  :hover {
    color: ${getColor("primary")};
  }
`

const Badge = styled.div`
  padding: 4px 8px;
  background: ${getColor("mist")};
  ${roundedCSS};
`

export const PersonalProject = ({
  name,
  url,
  description,
  achievement,
  responsibilities,
}: Props) => {
  return (
    <VStack alignItems="start" gap={4}>
      <HStack alignItems="center" gap={16}>
        <ExternalLink to={url}>
          <Title weight="bold">{name}</Title>{" "}
        </ExternalLink>
        {achievement && (
          <Badge>
            <Text color="supporting" weight="semibold" size={14}>
              {achievement}
            </Text>
          </Badge>
        )}
      </HStack>
      <Text color="supporting">{description}</Text>
      {responsibilities && <Responsibilities items={responsibilities} />}
    </VStack>
  )
}
