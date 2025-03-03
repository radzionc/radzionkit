import { Panel } from '@lib/ui/css/panel'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { ActionInsideInteractiveElement } from '../base/ActionInsideInteractiveElement'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { interactive } from '../css/interactive'
import { sameDimensions } from '../css/sameDimensions'
import { takeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { transition } from '../css/transition'
import { CloseIcon } from '../icons/CloseIcon'
import { ActionProp, ChildrenProp } from '../props'
import { Text } from '../text'
import { getColor } from '../theme/getters'

interface ImageBannerProps extends ActionProp {
  onClose: () => void
  title: ReactNode
  image: ReactNode
  renderInteractiveArea: (props: ChildrenProp) => ReactNode
}

const padding = '20px'

const ImagePosition = styled.div`
  ${takeWholeSpaceAbsolutely}
  ${transition}
`

const PositionAction = styled.div`
  position: absolute;
  bottom: ${padding};
  right: ${padding};
  pointer-events: none;
  ${transition}
`

const Content = styled.div`
  ${takeWholeSpaceAbsolutely}
  padding: ${padding};
`

const Container = styled(Panel)`
  position: relative;
  min-height: 320px;

  box-shadow: ${({ theme }) => theme.shadows.medium};

  &:hover ${PositionAction} {
    transform: scale(1.06);
  }

  &:hover ${ImagePosition} {
    transform: scale(1.06);
  }

  &:hover ${Content} {
    background: ${getColor('mistExtra')};
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

const Close = styled(UnstyledButton)`
  ${interactive};

  background: ${getColor('text')};

  ${transition};

  color: ${getColor('background')};

  ${borderRadius.s};

  ${centerContent};
  ${sameDimensions(40)};
  font-size: 20px;

  &:hover {
    background: ${getColor('contrast')};
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
        <Title weight="800" as="h2">
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
