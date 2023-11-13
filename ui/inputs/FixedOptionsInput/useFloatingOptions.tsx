import { autoUpdate, offset, shift, size } from '@floating-ui/dom'
import {
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useRef, useState } from 'react'
import { useBoolean } from '../../hooks/useBoolean'
import { useHasFocusWithin } from '../../hooks/useHasFocusWithin'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import { useKey } from 'react-use'

export const useFloatingOptions = () => {
  const [
    areOptionsVisible,
    { set: showOptions, unset: hideOptions, toggle: toggleOptionsVisibility },
  ] = useBoolean(false)

  const { refs, context, floatingStyles } = useFloating<HTMLDivElement>({
    placement: 'bottom-start',
    strategy: 'fixed',
    open: areOptionsVisible,
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

  const labelHasFocusWithin = useHasFocusWithin(refs.domReference)
  useEffectOnDependencyChange(() => {
    if (labelHasFocusWithin) {
      showOptions()
    } else {
      hideOptions()
    }
  }, [labelHasFocusWithin])

  useKey('Escape', hideOptions)

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
    areOptionsVisible,
    showOptions,
    hideOptions,
    toggleOptionsVisibility,
  } as const
}
