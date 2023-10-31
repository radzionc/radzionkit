import { ReactNode } from 'react'

import { getColor } from './theme/getters'
import styled from 'styled-components'
import { handleWithStopPropagation } from '../shared/events'
import { ComponentWithChildrenProps, ClosableComponentProps } from '../props'
import { BodyPortal } from '../dom/BodyPortal'
import { ScreenCover } from './ScreenCover'
import { VStack, HStack } from '../layout/Stack'
import { Text } from './Text'
import { horizontalPadding } from '../css/horizontalPadding'
import { verticalPadding } from '../css/verticalPadding'
import { Button } from '../buttons/Button'

export type BottomSlideOverProps = ComponentWithChildrenProps &
  ClosableComponentProps & {
    title: ReactNode
  }

const Cover = styled(ScreenCover)`
  align-items: flex-end;
  justify-content: flex-end;
`

const Container = styled(VStack)`
  width: 100%;
  border-radius: 20px 20px 0 0;
  ${verticalPadding(24)}

  background: ${getColor('background')};
  max-height: 80%;

  gap: 32px;

  > * {
    ${horizontalPadding(16)}
  }
`

const Content = styled(VStack)`
  flex: 1;
  overflow-y: auto;
`

export const BottomSlideOver = ({
  children,
  onClose,
  title,
}: BottomSlideOverProps) => {
  return (
    <BodyPortal>
      <Cover onClick={onClose}>
        <Container onClick={handleWithStopPropagation()}>
          <HStack gap={8} alignItems="center" justifyContent="space-between">
            <Text cropped as="div" weight="bold" size={24}>
              {title}
            </Text>
            <Button kind="secondary" size="l" onClick={onClose} isRounded>
              Close
            </Button>
          </HStack>
          <Content gap={12}>{children}</Content>
        </Container>
      </Cover>
    </BodyPortal>
  )
}
