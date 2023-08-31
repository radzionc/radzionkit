import { ReactNode } from 'react'

import { Button } from './buttons/Button'
import { getColor } from './theme/getters'
import styled from 'styled-components'
import { handleWithStopPropagation } from '../shared/events'
import { ComponentWithChildrenProps, ClosableComponentProps } from '../props'
import { BodyPortal } from './BodyPortal'
import { ScreenCover } from './ScreenCover'
import { VStack, HStack } from './Stack'
import { getHorizontalPaddingCSS } from './utils/getHorizontalPaddingCSS'
import { getVerticalPaddingCSS } from './utils/getVerticalPaddingCSS'
import { Text } from './Text'

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
  ${getVerticalPaddingCSS(24)}

  background: ${getColor('background')};
  max-height: 80%;

  gap: 32px;

  > * {
    ${getHorizontalPaddingCSS(16)}
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
