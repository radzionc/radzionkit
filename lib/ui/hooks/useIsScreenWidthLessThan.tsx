import { toSizeUnit } from '../css/toSizeUnit'
import { useMedia } from './useMedia'

export const useIsScreenWidthLessThan = (width: number | string) => {
  return useMedia(`(max-width: ${toSizeUnit(width)})`, false)
}
