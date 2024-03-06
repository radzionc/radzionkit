import { range } from '@lib/utils/array/range'
import { labelColorsCount } from '../colors/generateLabelColorGetter'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import { getRandomElement } from '@lib/utils/array/getRandomElement'
import { without } from '@lib/utils/array/without'
import { isEmpty } from '@lib/utils/array/isEmpty'

type SuggestLabelColorInput = {
  used: number[]
}

export const suggestLabelColor = ({ used }: SuggestLabelColorInput) => {
  const usedColors = withoutDuplicates(used)
  const freeColors = without(range(labelColorsCount), ...usedColors)

  return getRandomElement(isEmpty(freeColors) ? usedColors : freeColors)
}
