import {
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useClick,
  useDismiss,
  useTypeahead,
  flip,
} from '@floating-ui/react'
import { autoUpdate, offset, Placement, size, Strategy } from '@floating-ui/dom'
import { useRef, useState } from 'react'
import { toSizeUnit } from '../css/toSizeUnit'
import { useValueRef } from '../hooks/useValueRef'

type FloatingOptionsParams = {
  selectedIndex: number | null
  strategy?: Strategy
  placement?: Placement
  optionsContainerMaxHeight?: number
  options?: string[]
}

interface GetOptionsPropsParams {
  index: number
  onSelect: () => void
}

export const useFloatingOptions = ({
  selectedIndex,
  strategy = 'fixed',
  placement = 'bottom-end',
  optionsContainerMaxHeight = 320,
  options,
}: FloatingOptionsParams) => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, context, floatingStyles } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    strategy,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      size({
        apply({ elements, availableHeight, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: toSizeUnit(
              optionsContainerMaxHeight
                ? Math.min(availableHeight, optionsContainerMaxHeight)
                : availableHeight,
            ),
            minWidth: toSizeUnit(rects.reference.width),
          })
        },
      }),
    ],
  })

  const optionsRef = useRef<Array<HTMLElement | null>>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const optionStringsRef = useValueRef(options || [])

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context, { event: 'mousedown' }),
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef: optionsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
        loop: true,
      }),
      useTypeahead(context, {
        listRef: optionStringsRef,
        activeIndex,
        enabled: !!options,
        onMatch: setActiveIndex,
      }),
    ],
  )

  const getReferencePropsEnhanced = () => {
    return getReferenceProps({
      ref: refs.setReference,
      tabIndex: 0,
      'aria-autocomplete': 'none',
      'aria-labelledby': 'select-label',
    })
  }

  const getFloatingPropsEnhanced = () => {
    return getFloatingProps({
      ref: refs.setFloating,
      style: floatingStyles,
    })
  }

  const getOptionPropsEnhanced = ({
    index,
    onSelect,
  }: GetOptionsPropsParams) => {
    return getItemProps({
      role: 'option',
      tabIndex: activeIndex === index ? 0 : -1,
      'aria-selected': index === selectedIndex && index === activeIndex,
      onClick: onSelect,
      ref: (element) => {
        optionsRef.current[index] = element
      },
      onKeyDown: (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          onSelect()
        }
      },
    })
  }

  return {
    isOpen,
    setIsOpen,
    getReferenceProps: getReferencePropsEnhanced,
    getFloatingProps: getFloatingPropsEnhanced,
    getOptionProps: getOptionPropsEnhanced,
    activeIndex,
    floatingStyles,
    refs,
    context,
  } as const
}
