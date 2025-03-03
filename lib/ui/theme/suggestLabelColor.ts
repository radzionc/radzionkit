import { getRandomElement } from '@lib/utils/array/getRandomElement'
import { isEmpty } from '@lib/utils/array/isEmpty'
import { range } from '@lib/utils/array/range'
import { without } from '@lib/utils/array/without'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'

import { labelColorsCount } from '../colors/generateLabelColorGetter'

type SuggestLabelColorInput = {
  used: number[]
}

export const suggestLabelColor = ({ used }: SuggestLabelColorInput) => {
  const usedColors = withoutDuplicates(used)
  const freeColors = without(range(labelColorsCount), ...usedColors)

  return getRandomElement(isEmpty(freeColors) ? usedColors : freeColors)
}
