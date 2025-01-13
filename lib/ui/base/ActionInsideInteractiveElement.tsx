import { CSSProperties, ComponentProps, ReactNode, Ref } from 'react'
import styled from 'styled-components'

import { ElementSizeAware } from './ElementSizeAware'
import { Dimensions } from '@lib/utils/entities/Dimensions'
import { ComponentWithActionProps } from '../props'

interface ActionInsideInteractiveElementRenderParams<
  T extends CSSProperties = CSSProperties,
> {
  actionSize: Dimensions
  actionPlacerStyles: T
}

const Container = styled.div`
  position: relative;
`

type ActionInsideInteractiveElementProps<
  T extends CSSProperties = CSSProperties,
> = ComponentProps<typeof Container> &
  ComponentWithActionProps & {
    render: (params: ActionInsideInteractiveElementRenderParams<T>) => ReactNode
    actionPlacerStyles: T
    ref?: Ref<HTMLDivElement>
  }

const ActionPlacer = styled.div`
  position: absolute;
`

export function ActionInsideInteractiveElement<
  T extends CSSProperties = CSSProperties,
>({
  render,
  action,
  actionPlacerStyles,
  ...rest
}: ActionInsideInteractiveElementProps<T>) {
  return (
    <Container {...rest}>
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
}
