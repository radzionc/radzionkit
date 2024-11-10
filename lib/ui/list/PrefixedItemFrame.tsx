import styled from 'styled-components'
import { toSizeUnit } from '../css/toSizeUnit'
import { verticalPadding } from '../css/verticalPadding'
import { centerContent } from '../css/centerContent'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'
import { ReactNode } from 'react'
import { tightListItemConfig } from './tightListItemConfig'

type ContainerProps = {
  lineHeight: number
  gap: number
  verticalPadding: number
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  align-items: start;
  justify-items: start;
  gap: ${({ gap }) => toSizeUnit(gap)};
  font-weight: 500;
  font-size: 14px;
  text-align: start;
  ${({ verticalPadding: padding }) => verticalPadding(padding)};
  line-height: ${({ lineHeight }) => toSizeUnit(lineHeight)};
`

const PrefixContainer = styled.div`
  ${centerContent};
`

type PrefixedItemFrameProps = Partial<ContainerProps> &
  ComponentWithChildrenProps &
  UIComponentProps & {
    prefixWidth?: number
    prefix: ReactNode
  }

export const PrefixedItemFrame = ({
  prefixWidth = 18,
  lineHeight = tightListItemConfig.lineHeight,
  gap = 10,
  verticalPadding = tightListItemConfig.verticalPadding,
  children,
  prefix,
  className,
  style,
}: PrefixedItemFrameProps) => {
  return (
    <Container
      lineHeight={lineHeight}
      gap={gap}
      verticalPadding={verticalPadding}
      className={className}
      style={style}
    >
      <PrefixContainer
        style={{
          width: prefixWidth,
          height: lineHeight,
        }}
      >
        {prefix}
      </PrefixContainer>
      {children}
    </Container>
  )
}
