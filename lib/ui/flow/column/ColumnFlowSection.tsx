import { centerContent } from '@lib/ui/css/centerContent'
import { interactive } from '@lib/ui/css/interactive'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { transition } from '@lib/ui/css/transition'
import { useBoolean } from '@lib/ui/hooks/useBoolean'
import { CollapsableStateIndicator } from '@lib/ui/layout/CollapsableStateIndicator'
import { HStack, VStack } from '@lib/ui/css/stack'
import { IsActiveProp, ChildrenProp, TitleProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { getColor, matchColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'

type ColumnFlowSectionProps = ChildrenProp &
  TitleProp & {
    isCompleted: boolean
    index: number
  }

const paddingLeft = 32
const indexSize = 28

const Container = styled(VStack)<IsActiveProp>`
  border-left: 1px solid
    ${matchColor('isActive', {
      true: 'success',
      false: 'mist',
    })};

  &:not(:last-child) {
    padding-bottom: 60px;
  }
`

const Index = styled.div<IsActiveProp>`
  ${centerContent};
  ${sameDimensions(indexSize)};
  ${round}
  margin-left: -${toSizeUnit(indexSize / 2)};
  background: ${getColor('foreground')};
  font-weight: 500;
  font-size: 14px;
  border: 1px solid ${getColor('mist')};
  color: ${getColor('contrast')};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${getColor('success')};
      border-color: ${getColor('success')};
    `}
`

const Content = styled.div`
  padding-left: ${toSizeUnit(paddingLeft)};
  padding-top: 16px;
`

const Icon = styled(CollapsableStateIndicator)<{ isOpen: boolean }>`
  font-size: 16px;
  ${transition};
  transform: rotateZ(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
  color: ${getColor('textSupporting')};
`

const Title = styled(HStack)`
  align-items: center;
  gap: ${toSizeUnit(paddingLeft - indexSize / 2)};
`

const Header = styled(HStack)`
  ${interactive};
  align-items: center;
  justify-content: space-between;
  gap: ${toSizeUnit(paddingLeft - indexSize / 2)};
  &:hover ${Icon} {
    color: ${getColor('contrast')};
  }
`

export const ColumnFlowSection = ({
  children,
  title,
  isCompleted,
  index,
}: ColumnFlowSectionProps) => {
  const [isExpanded, { toggle }] = useBoolean(true)

  return (
    <Container isActive={isCompleted}>
      <Header onClick={toggle}>
        <Title>
          <Index isActive={isCompleted}>{index}</Index>
          <Text color="contrast" size={14} weight="500" as="div">
            {title}
          </Text>
        </Title>
        <Icon isOpen={isExpanded} />
      </Header>
      {isExpanded && <Content>{children}</Content>}
    </Container>
  )
}
