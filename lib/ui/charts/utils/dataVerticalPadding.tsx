import { normalize } from '@lib/utils/math/normalize'

type PaddingParams = {
  top?: number
  bottom?: number
}

export const dataVerticalPadding = (
  data: number[],
  { top, bottom }: PaddingParams,
) => {
  return normalize([...data, top ? 1 + top : 1, bottom ? 0 - bottom : 1]).slice(
    0,
    -2,
  )
}
