import { Dimensions } from './entities/Dimensions'
export declare const normalizeToMaxDimension: ({
  width,
  height,
}: Dimensions) => {
  width: number
  height: number
}
export declare const aspectRatioToDimensions: (aspectRatio: number) => {
  width: number
  height: number
}
