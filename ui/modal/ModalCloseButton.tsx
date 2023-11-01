import styled from 'styled-components'
import { ClickableComponentProps } from '../props'
import { Hoverable } from '../base/Hoverable'
import { CloseIcon } from '../icons/CloseIcon'
import { centerContent } from '../css/centerContent'
import { getColor } from '../theme/getters'
import { transition } from '../css/transition'
import { sameDimensions } from '../css/sameDimensions'

const IconWrapper = styled.div`
  font-size: 24px;
  ${sameDimensions(24)};
  ${centerContent};
  ${transition};
`

const Container = styled(Hoverable)`
  color: ${getColor('text')};
  :hover ${IconWrapper} {
    color: ${getColor('contrast')};
  }
`

export const ModalCloseButton = ({ onClick }: ClickableComponentProps) => {
  return (
    <Container onClick={onClick}>
      <IconWrapper>
        <CloseIcon />
      </IconWrapper>
    </Container>
  )
}
