import { CSSProperties } from 'react'
import { ComponentWithChildrenProps } from '../props'
import styled from 'styled-components'

interface RoundSvgProps extends ComponentWithChildrenProps {
  borderRadius: CSSProperties['borderRadius']
}

const Container = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`

export const RoundSvg = ({ children, borderRadius }: RoundSvgProps) => (
  <Container style={{ borderRadius }}>{children}</Container>
)
