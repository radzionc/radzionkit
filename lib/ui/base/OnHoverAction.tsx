import { Dimensions } from '@lib/utils/entities/Dimensions'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { ActionProp, UiProps } from '../props'

import { ElementSizeAware } from './ElementSizeAware'

interface OnHoverActionRenderParams<T extends React.CSSProperties> {
  actionSize: Dimensions | null
  actionPlacerStyles: T
}

type OnHoverActionProps<T extends React.CSSProperties> = UiProps &
  ActionProp & {
    render: (params: OnHoverActionRenderParams<T>) => ReactNode
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
