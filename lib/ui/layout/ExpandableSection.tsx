import { ComponentWithChildrenProps, TitledComponentProps } from '../props'
import { HStack, VStack } from './Stack'
import styled, { css } from 'styled-components'
import { interactive } from '../css/interactive'
import { getColor } from '../theme/getters'
import { useBoolean } from '../hooks/useBoolean'
import { transition } from '../css/transition'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { verticalPadding } from '../css/verticalPadding'
import { IconWrapper } from '../icons/IconWrapper'
import { Text } from '../text'
import { ElementSizeAware } from '../base/ElementSizeAware'

type ExpandableSectionProps = TitledComponentProps & ComponentWithChildrenProps

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
  ${transition};
  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          overflow: hidden;
          transform: translateY(-8px);
          visibility: hidden;
        `}
`

export const ExpandableSection = ({
  title,
  children,
}: ExpandableSectionProps) => {
  const [isExpanded, { toggle }] = useBoolean(false)
  return (
    <Container>
      <Header onClick={toggle}>
        <Text weight="semibold" color="contrast">
          {title}
        </Text>
        <Icon isOpen={isExpanded}>
          <ChevronDownIcon />
        </Icon>
      </Header>
      <ElementSizeAware
        render={({ setElement, size }) => {
          return (
            <Content
              style={{ height: isExpanded ? size?.height : 0 }}
              isOpen={isExpanded}
              aria-hidden={!isExpanded}
            >
              <div ref={setElement}>{children}</div>
            </Content>
          )
        }}
      />
    </Container>
  )
}
