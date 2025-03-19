import { ComponentProps, useRef } from 'react'
import styled from 'styled-components'

import { centerContent } from '../css/centerContent'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { useKeyDown } from '../hooks/useKeyDown'
import { OnCloseProp } from '../props'
import { getColor } from '../theme/getters'

const Container = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  ${takeWholeSpace};
  ${centerContent};
  background: ${getColor('overlay')};
  backdrop-filter: blur(4px);
`

export const Backdrop = ({
  onClose,
  ...props
}: Partial<OnCloseProp> & ComponentProps<typeof Container>) => {
  const isPointerDownInside = useRef(false)
  useKeyDown('Escape', onClose)

  return (
    <Container
      onPointerDown={({ target, currentTarget }) => {
        if (target === currentTarget) {
          isPointerDownInside.current = true
        }
      }}
      onPointerUp={() => {
        if (isPointerDownInside.current) {
          onClose?.()
        }
        isPointerDownInside.current = false
      }}
      onPointerCancel={() => {
        isPointerDownInside.current = false
      }}
      {...props}
    />
  )
}
