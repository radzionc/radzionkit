import { ReactNode } from 'react'
import styled from 'styled-components'

import { ElementSizeAware } from './ElementSizeAware'
import { ElementSize } from '../hooks/useElementSize'
import { UIComponentProps } from '../props'

interface OnHoverActionRenderParams<T extends React.CSSProperties> {
  actionSize: ElementSize | null
  actionPlacerStyles: T
}

type OnHoverActionProps<T extends React.CSSProperties> = UIComponentProps & {
  render: (params: OnHoverActionRenderParams<T>) => ReactNode
  action: ReactNode
  actionPlacerStyles: T
}

const ActionPlacer = styled.div`
  position: absolute;
  opacity: 0;
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
  ...rest
}: OnHoverActionProps<T>) {
  return (
    <Container {...rest}>
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
