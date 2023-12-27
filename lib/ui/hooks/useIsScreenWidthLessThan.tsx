import { useMedia } from 'react-use'
import { toSizeUnit } from '../css/toSizeUnit'

export const useIsScreenWidthLessThan = (width: number | string) => {
  return useMedia(`(max-width: ${toSizeUnit(width)})`, false)
}
