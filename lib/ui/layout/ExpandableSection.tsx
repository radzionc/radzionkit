import { ChildrenProp, TitleProp } from '../props'
import { HStack, VStack } from '@lib/ui/css/stack'
import styled, { css } from 'styled-components'
import { interactive } from '../css/interactive'
import { getColor } from '../theme/getters'
import { useBoolean } from '../hooks/useBoolean'
import { transition } from '../css/transition'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { verticalPadding } from '../css/verticalPadding'
import { IconWrapper } from '../icons/IconWrapper'
import { Text } from '../text'

type ExpandableSectionProps = TitleProp &
  ChildrenProp & {
    defaultIsOpen?: boolean
  }

const Container = styled(VStack)`
  gap: 4px;
`

const Icon = styled(IconWrapper)<{ isOpen: boolean }>`
  font-size: 20px;
  ${transition};
  transform: rotateZ(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
  color: ${getColor('textSupporting')};
`

const Header = styled(HStack)`
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  ${verticalPadding(8)};
  ${interactive};
  font-weight: 500;
  &:hover ${Icon} {
    color: ${getColor('contrast')};
  }
`

const Content = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
      height: 0;
    `}
`

export const ExpandableSection = ({
  title,
  children,
  defaultIsOpen = false,
}: ExpandableSectionProps) => {
  const [isExpanded, { toggle }] = useBoolean(defaultIsOpen)
  return (
    <Container>
      <Header onClick={toggle}>
        <Text as="div" weight="500" color="contrast">
          {title}
        </Text>
        <Icon isOpen={isExpanded}>
          <ChevronDownIcon />
        </Icon>
      </Header>
      <Content isOpen={isExpanded}>{children}</Content>
    </Container>
  )
}
