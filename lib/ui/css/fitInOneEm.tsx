import { aspectRatioToDimensions } from '@lib/utils/normalizeToMaxDimension'
import { css } from 'styled-components'

export const fitInOneEm = (aspectRatio: number) => () => {
  const { width, height } = aspectRatioToDimensions(aspectRatio)

  return css`
    width: ${width}em;
    height: ${height}em;
  `
}
