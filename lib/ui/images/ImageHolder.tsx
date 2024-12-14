import React, { ComponentProps } from 'react'
import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { Center } from '../layout/Center'
import { ImageIcon } from '../icons/ImageIcon'

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 16px;
  background: ${getColor('mist')};
  box-shadow: ${({ theme }) => theme.shadows.small};
`

type ImpageHolderProps = ComponentProps<typeof Container> & {
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
}

const ImageIconWr = styled(Center)`
  z-index: -1;

  position: absolute;
  font-size: 20px;
  background: ${getColor('mist')};
`

export const ImageHolder = ({
  width,
  height,
  children,
  ...rest
}: ImpageHolderProps) => {
  return (
    <Container style={{ width, height }} {...rest}>
      <ImageIconWr>
        <ImageIcon />
      </ImageIconWr>
      {children}
    </Container>
  )
}
