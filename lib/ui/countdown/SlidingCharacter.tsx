import styled, { keyframes, css } from 'styled-components'
import { Text } from '../text'

const getAnimation = (id: string) => keyframes`
  0% {
    --id: ${id};
    top: 0%;
  }
`

interface Props {
  animationId?: string
}

export const SlidingCharacter = styled(Text)<Props>`
  position: absolute;
  top: -100%;
  ${({ animationId }) =>
    animationId &&
    css`
      animation: ${getAnimation(animationId)} 640ms ease-in-out;
    `}
`
