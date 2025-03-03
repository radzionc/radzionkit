import { BodyPortal } from '@lib/ui/dom/BodyPortal'
import { ModalContainer } from '@lib/ui/modal/ModalContainer'
import { ChildrenProp, OnFinishProp } from '@lib/ui/props'
import styled from 'styled-components'

import { Backdrop } from './Backdrop'

const Container = styled(ModalContainer)`
  > * {
    border-radius: 0;
    border: none;
  }
`

type PanelModalProps = OnFinishProp &
  ChildrenProp & {
    width?: number
  }

export const PanelModal = ({
  onFinish,
  children,
  width = 560,
}: PanelModalProps) => {
  return (
    <BodyPortal>
      <Backdrop onClose={() => onFinish()}>
        <Container placement="top" targetWidth={width}>
          {children}
        </Container>
      </Backdrop>
    </BodyPortal>
  )
}
