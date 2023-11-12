import { autoUpdate, offset, shift, size } from '@floating-ui/dom'
import {
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useRef, useState } from 'react'

export const useFloatingOptions = () => {
  const { refs, context, floatingStyles } = useFloating<HTMLDivElement>({
    placement: 'bottom-start',
    strategy: 'fixed',
    open: true,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: toSizeUnit(rects.reference.width),
          })
        },
      }),
    ],
  })

  const optionsRef = useRef<Array<HTMLElement | null>>([])

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useRole(context, { role: 'listbox' }),
      useListNavigation(context, {
        listRef: optionsRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true,
      }),
    ],
  )

  return {
    referenceRef: refs.domReference,
    setReferenceRef: refs.setReference,
    setFloatingRef: refs.setFloating,
    floatingStyles,
    optionsRef,
    activeIndex,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    setActiveIndex,
  } as const
}
