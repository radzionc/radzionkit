import { ReactNode } from 'react'
import styled from 'styled-components'

import { ElementSizeAware } from './ElementSizeAware'
import { ElementSize } from '../hooks/useElementSize'
import { transition } from '../css/transition'

interface OnHoverActionRenderParams<T extends React.CSSProperties> {
  actionSize: ElementSize | null
  actionPlacerStyles: T
}

interface OnHoverActionProps<T extends React.CSSProperties> {
  render: (params: OnHoverActionRenderParams<T>) => ReactNode
  action: ReactNode
  actionPlacerStyles: T
}

const ActionPlacer = styled.div`
  position: absolute;
  opacity: 0;
  ${transition};
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover ${ActionPlacer} {
    opacity: 1;
  }
`

export function OnHoverAction<T extends React.CSSProperties>({
  render,
  action,
  actionPlacerStyles,
}: OnHoverActionProps<T>) {
  return (
    <Container>
      <ElementSizeAware
        render={({ setElement, size }) => (
          <>
            {render({
              actionPlacerStyles,
              actionSize: size,
            })}
            <ActionPlacer ref={setElement} style={actionPlacerStyles}>
              {action}
            </ActionPlacer>
          </>
        )}
      />
    </Container>
  )
}
