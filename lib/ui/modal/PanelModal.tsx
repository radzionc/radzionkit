import {
  ComponentWithChildrenProps,
  FinishableComponentProps,
} from '@lib/ui/props'
import { useIsScreenWidthLessThan } from '@lib/ui/hooks/useIsScreenWidthLessThan'
import { modalConfig } from '@lib/ui/modal/config'
import { BodyPortal } from '@lib/ui/dom/BodyPortal'
import { CompleteMist } from '@lib/ui/modal/CompleteMist'
import { FocusTrap } from '@lib/ui/modal/FocusTrap'
import styled from 'styled-components'
import { ModalContainer } from '@lib/ui/modal/ModalContainer'
import { stopPropagation } from '@lib/ui/utils/stopPropagation'
import { getColor } from '@lib/ui/theme/getters'

const Container = styled(ModalContainer)`
  overflow: hidden;
  border: 2px solid ${getColor('textShy')};

  > * {
    &:first-child {
      padding: 0;
      border-radius: 0;
      border: none;
    }
  }
`

type PanelModalProps = FinishableComponentProps &
  ComponentWithChildrenProps & {
    width?: number
  }

export const PanelModal = ({
  onFinish,
  children,
  width = 560,
}: PanelModalProps) => {
  const isFullScreen = useIsScreenWidthLessThan(
    width + modalConfig.minHorizontalFreeSpaceForMist,
  )

  return (
    <BodyPortal>
      <CompleteMist onClick={onFinish}>
        <FocusTrap>
          <Container
            onClick={stopPropagation()}
            placement="top"
            width={isFullScreen ? undefined : width}
          >
            {children}
          </Container>
        </FocusTrap>
      </CompleteMist>
    </BodyPortal>
  )
}
