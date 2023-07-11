import { useBoolean } from "lib/shared/hooks/useBoolean"
import { ReactNode } from "react"
import styled from "styled-components"
import { defaultTransitionCSS } from "../animations/transitions"
import { ChevronDownIcon } from "../icons/ChevronDownIcon"
import { HStack } from "../Stack"
import { centerContentCSS } from "../utils/centerContentCSS"
import { getSameDimensionsCSS } from "../utils/getSameDimensionsCSS"
import { roundedCSS } from "../utils/roundedCSS"
import { Panel, PanelProps } from "./Panel"
import { getColor } from "../theme/getters"

interface ExpandableProps extends PanelProps {
  header: ReactNode
  renderContent: () => ReactNode
}

const ExpandIconWrapper = styled.div<{ isExpanded: boolean }>`
  ${roundedCSS};
  ${getSameDimensionsCSS(40)};
  ${centerContentCSS};

  background: ${getColor("mist")};

  ${defaultTransitionCSS};

  font-size: 20px;

  transform: rotateZ(${({ isExpanded }) => (isExpanded ? "-180deg" : "0deg")});
`

const Header = styled.div`
  all: unset;
  ${centerContentCSS};
  ${defaultTransitionCSS};

  :hover ${ExpandIconWrapper} {
    background: ${({ theme }) => theme.colors.mistExtra.toCssValue()};
  }
`

export const ExpandablePanel = ({
  header,
  renderContent,
  ...panelProps
}: ExpandableProps) => {
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
