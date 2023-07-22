import React, { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'
import { Center } from '../Center'
import { ImageIcon } from '../icons/ImageIcon'
import { getColor } from '../theme/getters'

interface Props {
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  className?: string
  children?: ReactNode
}

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 16px;
  background: ${getColor('mist')};
  box-shadow: ${({ theme }) => theme.shadows.small};
`

const ImageIconWr = styled(Center)`
  z-index: -1;

  position: absolute;
  font-size: 20px;
  background: ${getColor('mist')};
`

export const ImageHolder = forwardRef(function ImageHolderInner(
  { width, height, children }: Props,
  ref: React.Ref<HTMLDivElement> | null,
) {
  return (
    <Container style={{ width, height }} ref={ref}>
      <ImageIconWr>
        <ImageIcon />
      </ImageIconWr>
      {children}
    </Container>
  )
})
