import { ReactNode } from 'react'
import styled from 'styled-components'

import { ElementSizeAware } from '../ui/ElementSizeAware'
import { ElementSize } from '../hooks/useElementSize'

interface ActionInsideInteractiveElementRenderParams<
  T extends React.CSSProperties,
> {
  actionSize: ElementSize
  actionPlacerStyles: T
}

interface ActionInsideInteractiveElementProps<T extends React.CSSProperties> {
  className?: string
  render: (params: ActionInsideInteractiveElementRenderParams<T>) => ReactNode
  action: ReactNode
  actionPlacerStyles: T
}

const ActionPlacer = styled.div`
  position: absolute;
`

const Container = styled.div`
  position: relative;
`

export function ActionInsideInteractiveElement<T extends React.CSSProperties>({
  render,
  action,
  actionPlacerStyles,
  className,
}: ActionInsideInteractiveElementProps<T>) {
  return (
    <Container className={className}>
      <ElementSizeAware
        render={({ setElement, size }) => (
          <>
            {size &&
              render({
                actionPlacerStyles,
                actionSize: size,
              })}
            <ActionPlacer
              ref={setElement}
              style={{ opacity: size ? 1 : 0, ...actionPlacerStyles }}
            >
              {action}
            </ActionPlacer>
          </>
        )}
      />
    </Container>
  )
}
