interface Week {
  week: number
  year: number
}

export const areSameWeek = (one: Week, another: Week) =>
  one.week === another.week && one.year === another.year
