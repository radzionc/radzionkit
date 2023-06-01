import { ExternalLink } from 'lib/navigation/Link/ExternalLink'
import { defaultTransitionCSS } from 'lib/ui/animations/transitions'
import { HStack, VStack } from 'lib/ui/Stack'
import { Text } from 'lib/ui/Text'
import { roundedCSS } from 'lib/ui/utils/roundedCSS'
import styled from 'styled-components'
import { Responsibilities } from './Responsibilities'

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
    color: ${({ theme }) => theme.colors.attention.toCssValue()};
  }
`

const Badge = styled.div`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
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
          <Title weight="bold">{name}</Title>{' '}
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
