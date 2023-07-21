import { ComponentProps } from 'react'

import styled, { css } from 'styled-components'
import { handleWithStopPropagation, handleWithStopPropagationAndPreventDefault } from '../../shared/events'
import { zIndex } from '../zIndex'

const Container = styled.div<{ isBlurred?: boolean }>`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${zIndex.screenCover};

  background: ${({ theme }) => theme.colors.overlay.toCssValue()};

  ${({ isBlurred }) =>
    isBlurred &&
    css`
      backdrop-filter: blur(4px);
    `}
`
Container.defaultProps = {
  isBlurred: true,
}

type Props = ComponentProps<typeof Container>

export const ScreenCover = ({ onClick, ...props }: Props) => (
  <Container
    onMouseDown={handleWithStopPropagation}
    onClick={handleWithStopPropagationAndPreventDefault(onClick)}
    {...props}
  />
)
