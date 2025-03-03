import { Panel } from '@lib/ui/css/panel'
import { HStack } from '@lib/ui/css/stack'
import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'

import { centerContent } from '../css/centerContent'
import { interactive } from '../css/interactive'
import { round } from '../css/round'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { useBoolean } from '../hooks/useBoolean'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { getColor } from '../theme/getters'

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
