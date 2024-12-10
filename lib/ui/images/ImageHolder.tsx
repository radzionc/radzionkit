import React, { ReactNode, forwardRef } from 'react'
import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { Center } from '../layout/Center'
import { ImageIcon } from '../icons/ImageIcon'

interface Props extends React.RefAttributes<HTMLDivElement> {
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

export const ImageHolder = forwardRef<HTMLDivElement, Props>(
  ({ width, height, children, ...rest }, ref) => {
    return (
      <Container ref={ref} style={{ width, height }} {...rest}>
        <ImageIconWr>
          <ImageIcon />
        </ImageIconWr>
        {children}
      </Container>
    )
  },
)
