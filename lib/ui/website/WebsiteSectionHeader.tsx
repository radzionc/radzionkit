import { VStack } from '@lib/ui/css/stack'
import { match } from '@lib/utils/match'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { TitleProp } from '../props'
import { Text } from '../text'

type SectionHeaderAlign = 'center' | 'start'

export type WebsiteSectionHeaderProps = TitleProp & {
  subtitle?: ReactNode
  titleAs?: React.ElementType
  align?: SectionHeaderAlign
}

const Title = styled(Text)`
  font-size: 32px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const Container = styled(VStack)<{ align: SectionHeaderAlign }>`
  gap: 8px;
  ${({ align }) =>
    match(align, {
      center: () => css`
        align-items: center;
        text-align: center;
      `,
      start: () => css`
        align-items: start;
      `,
    })}
  line-height: 1.5;
  max-width: 600px;
`

export const WebsiteSectionHeader = ({
  title,
  subtitle,
  titleAs = 'h2',
  align = 'center',
}: WebsiteSectionHeaderProps) => (
  <Container align={align}>
    <Title color="contrast" as={titleAs}>
      {title}
    </Title>
    {subtitle && <Text>{subtitle}</Text>}
  </Container>
)
