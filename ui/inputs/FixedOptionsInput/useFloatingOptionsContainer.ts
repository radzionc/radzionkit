import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  autoUpdate,
} from '@floating-ui/react'
import { toSizeUnit } from '../../css/toSizeUnit'

export const useFloatingOptionsContainer = () => {
  return useFloating({
    placement: 'bottom-start',
    strategy: 'absolute',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
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
}
