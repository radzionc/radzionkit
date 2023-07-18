import { ReactNode } from "react"
import styled from "styled-components"

import { ActionInsideInteractiveElement } from "./ActionInsideInteractiveElement"
import { defaultTransitionCSS } from "./animations/transitions"
import { CloseIcon } from "./icons/CloseIcon"
import { Panel } from "./Panel/Panel"
import { Text } from "./Text"
import { getColor } from "./theme/getters"
import { centerContentCSS } from "./utils/centerContentCSS"
import { fullyCoverAbsolutely } from "./utils/fullyCoverAbsolutely"
import { getSameDimensionsCSS } from "./utils/getSameDimensionsCSS"
import { interactiveCSS } from "./utils/interactiveCSS"
import { ComponentWithChildrenProps } from "lib/shared/props"

interface ImageBannerProps {
  onClose: () => void
  action: ReactNode
  title: ReactNode
  image: ReactNode
  renderInteractiveArea: (props: ComponentWithChildrenProps) => ReactNode
}

const padding = "20px"

const ImagePosition = styled.div`
  ${fullyCoverAbsolutely}
  ${defaultTransitionCSS}
`

const PositionAction = styled.div`
  position: absolute;
  bottom: ${padding};
  right: ${padding};
  pointer-events: none;
  ${defaultTransitionCSS}
`

const Content = styled.div`
  ${fullyCoverAbsolutely}
  padding: ${padding};
`

const Container = styled(Panel)`
  position: relative;
  min-height: 320px;

  box-shadow: ${({ theme }) => theme.shadows.medium};

  :hover ${PositionAction} {
    transform: scale(1.06);
  }

  :hover ${ImagePosition} {
    transform: scale(1.06);
  }

  :hover ${Content} {
    background: ${getColor("mistExtra")};
  }
`

const Title = styled(Text)`
  text-transform: uppercase;
  line-height: 1;

  font-size: 40px;

  @media (width <= 800px) {
    font-size: 32px;
  }
`

const Close = styled.button`
  all: unset;

  ${interactiveCSS};

  background: ${getColor("text")};

  ${defaultTransitionCSS};

  color: ${getColor("background")};

  border-radius: 8px;
  ${centerContentCSS};
  ${getSameDimensionsCSS(40)};
  font-size: 20px;

  :hover {
    background: ${getColor("contrast")};
  }
`

export const ImageBanner = ({
  onClose,
  action,
  title,
  image,
  renderInteractiveArea,
}: ImageBannerProps) => {
  const content = (
    <Container>
      <ImagePosition>{image}</ImagePosition>
      <Content>
        <Title weight="extraBold" as="h2">
          {title}
        </Title>
      </Content>
      <PositionAction>{action}</PositionAction>
    </Container>
  )

  return (
    <ActionInsideInteractiveElement
      action={
        <Close title="Dismiss" onClick={onClose}>
          <CloseIcon />
        </Close>
      }
      actionPlacerStyles={{
        right: padding,
        top: padding,
      }}
      render={() => renderInteractiveArea({ children: content })}
    />
  )
}
