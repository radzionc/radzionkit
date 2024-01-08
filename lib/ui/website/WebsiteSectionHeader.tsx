import { ReactNode } from 'react'
import { TitledComponentProps } from '../props'
import { VStack } from '../layout/Stack'
import styled from 'styled-components'
import { Text } from '../text'

type WebsiteSectionHeaderProps = TitledComponentProps & {
  subtitle?: ReactNode
  titleAs?: React.ElementType
}

const Title = styled(Text)`
  font-size: 32px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const Container = styled(VStack)`
  gap: 8px;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  max-width: 600px;
`

export const WebsiteSectionHeader = ({
  title,
  subtitle,
  titleAs = 'h2',
}: WebsiteSectionHeaderProps) => (
  <Container>
    <Title color="contrast" as={titleAs}>
      {title}
    </Title>
    {subtitle && <Text>{subtitle}</Text>}
  </Container>
)
