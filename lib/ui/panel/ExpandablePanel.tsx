import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'
import { transition } from '../css/transition'
import { HStack } from '../layout/Stack'
import { Panel } from '@lib/ui/css/panel'
import { getColor } from '../theme/getters'
import { useBoolean } from '../hooks/useBoolean'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { interactive } from '../css/interactive'
import { round } from '../css/round'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

type ExpandablePanelProps = ComponentProps<typeof Panel> & {
  header: ReactNode
  renderContent: () => ReactNode
}

const ExpandIconWrapper = styled.div<{ isExpanded: boolean }>`
  ${round};
  ${sameDimensions(28)};
  ${centerContent};

  background: ${getColor('mist')};

  ${transition};

  font-size: 16px;

  transform: rotateZ(${({ isExpanded }) => (isExpanded ? '-180deg' : '0deg')});
`

const Header = styled.div`
  ${interactive};
  ${centerContent};
  ${transition};

  &:hover ${ExpandIconWrapper} {
    background: ${({ theme }) => theme.colors.mistExtra.toCssValue()};
  }
`

export const ExpandablePanel = ({
  header,
  renderContent,
  ...panelProps
}: ExpandablePanelProps) => {
  const [isExpanded, { toggle }] = useBoolean(false)

  return (
    <Panel withSections {...panelProps}>
      <Header onClick={toggle}>
        <HStack fullWidth justifyContent="space-between" alignItems="center">
          {header}
          <ExpandIconWrapper isExpanded={isExpanded}>
            <ChevronDownIcon />
          </ExpandIconWrapper>
        </HStack>
      </Header>
      {isExpanded && renderContent()}
    </Panel>
  )
}
