import { css } from 'styled-components'
import { toSizeUnit } from './toSizeUnit'

export const absoluteOutline = (
  horizontalOffset: number | string,
  verticalOffset: number | string,
) => {
  return css`
    pointer-events: none;
    position: absolute;
    left: -${toSizeUnit(horizontalOffset)};
    top: -${toSizeUnit(verticalOffset)};
    width: calc(100% + ${toSizeUnit(horizontalOffset)} * 2);
    height: calc(100% + ${toSizeUnit(verticalOffset)} * 2);
  `
}
