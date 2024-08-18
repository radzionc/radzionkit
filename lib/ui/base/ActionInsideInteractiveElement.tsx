import {
  CSSProperties,
  ComponentProps,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'
import styled from 'styled-components'

import { ElementSizeAware } from './ElementSizeAware'
import { ElementSize } from '../hooks/useElementSize'

interface ActionInsideInteractiveElementRenderParams<
  T extends CSSProperties = CSSProperties,
> {
  actionSize: ElementSize
  actionPlacerStyles: T
}

const Container = styled.div`
  position: relative;
`

type ActionInsideInteractiveElementProps<
  T extends CSSProperties = CSSProperties,
> = ComponentProps<typeof Container> & {
  render: (params: ActionInsideInteractiveElementRenderParams<T>) => ReactNode
  action: ReactNode
  actionPlacerStyles: T
}

const ActionPlacer = styled.div`
  position: absolute;
`

export const ActionInsideInteractiveElement = forwardRef(
  function ActionInsideInteractiveElement<
    T extends CSSProperties = CSSProperties,
  >(
    {
      render,
      action,
      actionPlacerStyles,
      ...rest
    }: ActionInsideInteractiveElementProps<T>,
    ref: Ref<HTMLDivElement>,
  ) {
    return (
      <Container ref={ref} {...rest}>
        <ElementSizeAware
          render={({ setElement, size }) => (
            <>
              {render({
                actionPlacerStyles,
                actionSize: size ?? { width: 0, height: 0 },
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
  },
)
