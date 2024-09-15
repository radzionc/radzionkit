import { ReactNode } from 'react'

import { getColor } from '../theme/getters'
import styled from 'styled-components'
import { ComponentWithChildrenProps, ClosableComponentProps } from '../props'
import { BodyPortal } from '../dom/BodyPortal'
import { VStack, HStack } from '@lib/ui/css/stack'
import { Text } from '../text'
import { horizontalPadding } from '../css/horizontalPadding'
import { verticalPadding } from '../css/verticalPadding'
import { Button } from '../buttons/Button'
import { stopPropagation } from '../utils/stopPropagation'
import { Backdrop } from './Backdrop'

export type BottomSlideOverProps = ComponentWithChildrenProps &
  ClosableComponentProps & {
    title: ReactNode
  }

const Cover = styled(Backdrop)`
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
      <Cover onClose={onClose}>
        <Container onClick={stopPropagation()}>
          <HStack gap={8} alignItems="center" justifyContent="space-between">
            <Text cropped as="div" weight="600" size={24}>
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
