import React, { ComponentProps, useRef } from 'react'
import styled from 'styled-components'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { centerContent } from '../css/centerContent'
import { getColor } from '../theme/getters'
import { OnCloseProp } from '../props'
import { useKeyDown } from '../hooks/useKeyDown'

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
