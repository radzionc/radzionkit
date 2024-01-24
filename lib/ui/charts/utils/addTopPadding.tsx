import { normalize } from '@lib/utils/math/normalize'

export const addTopPadding = (data: number[], value: number) =>
  normalize([...data, 1 + value]).slice(0, -1)
