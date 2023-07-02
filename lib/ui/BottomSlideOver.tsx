import { ReactNode } from "react"
import { handleWithStopPropagation } from "lib/shared/events"
import {
  ClosableComponentProps,
  ComponentWithChildrenProps,
} from "lib/shared/props"
import styled from "styled-components"
import { BodyPortal } from "lib/ui/BodyPortal"
import { ScreenCover } from "lib/ui/ScreenCover"
import { HStack, VStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"
import { getHorizontalPaddingCSS } from "lib/ui/utils/getHorizontalPaddingCSS"
import { getVerticalPaddingCSS } from "lib/ui/utils/getVerticalPaddingCSS"
import { Button } from "./buttons/Button"

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

  background: ${({ theme }) => theme.colors.background.toCssValue()};
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
