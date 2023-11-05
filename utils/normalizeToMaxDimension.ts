import { Dimensions } from './entities/Dimensions'

export const normalizeToMaxDimension = ({ width, height }: Dimensions) => {
  const maxDimension = Math.max(width, height)

  return { width: width / maxDimension, height: height / maxDimension }
}

export const aspectRatioToDimensions = (aspectRatio: number) =>
  normalizeToMaxDimension({ width: aspectRatio, height: 1 })
