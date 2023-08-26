import { Month } from 'shared/entities/Month'

export const areSameMonth = (one: Month, another: Month) =>
  one.month === another.month && one.year === another.year
