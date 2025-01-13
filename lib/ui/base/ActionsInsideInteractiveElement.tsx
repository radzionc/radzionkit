import { CSSProperties, ComponentProps, ReactNode, Ref, useState } from 'react'
import styled from 'styled-components'

import { ElementSizeAware } from './ElementSizeAware'

import { toEntries } from '@lib/utils/record/toEntries'
import { recordFromKeys } from '@lib/utils/record/recordFromKeys'
import { getRecordKeys } from '@lib/utils/record/getRecordKeys'
import { useStateCorrector } from '../state/useStateCorrector'
import { getRecordSize } from '@lib/utils/record/getRecordSize'
import { pick } from '@lib/utils/record/pick'
import { Dimensions } from '@lib/utils/entities/Dimensions'

type RenderParams<K extends string> = {
  actions: Record<K, { size: Dimensions; placerStyles: CSSProperties }>
}

const Container = styled.div`
  position: relative;
`

type ActionsInsideInteractiveElementProps<K extends string> = ComponentProps<
  typeof Container
> & {
  ref?: Ref<HTMLDivElement>
  render: (params: RenderParams<K>) => ReactNode
  actions: Record<
    K,
    {
      placerStyles: CSSProperties
      node: ReactNode
    }
  >
}

const ActionPlacer = styled.div`
  position: absolute;
`

export function ActionsInsideInteractiveElement<K extends string>({
  render,
  actions,
  ...rest
}: ActionsInsideInteractiveElementProps<K>) {
  const [sizes, setSizes] = useStateCorrector(
    useState<Record<K, Dimensions>>(() =>
      recordFromKeys(getRecordKeys(actions), () => ({ width: 0, height: 0 })),
    ),
    (sizes) => {
      let result = sizes

      const keys = getRecordKeys(actions)

      keys.forEach((key) => {
        if (!sizes[key]) {
          result = {
            ...result,
            [key]: { width: 0, height: 0 },
          }
        }
      })

      if (getRecordSize(result) !== keys.length) {
        return pick(result, keys)
      }

      return result
    },
  )

  return (
    <Container {...rest}>
      {render({
        actions: recordFromKeys(getRecordKeys(actions), (key) => ({
          size: sizes[key],
          placerStyles: actions[key].placerStyles,
        })),
      })}
      {toEntries(actions).map(({ key, value }) => {
        const { node, placerStyles } = value
        return (
          <ElementSizeAware
            key={key}
            onChange={(size) => {
              if (size) {
                setSizes((sizes) => ({
                  ...sizes,
                  [key]: size,
                }))
              }
            }}
            render={({ setElement, size }) => (
              <ActionPlacer
                ref={setElement}
                style={{ opacity: size ? 1 : 0, ...placerStyles }}
              >
                {node}
              </ActionPlacer>
            )}
          />
        )
      })}
    </Container>
  )
}
