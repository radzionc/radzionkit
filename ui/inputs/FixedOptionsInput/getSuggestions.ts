interface GetSuggestionsParams<T> {
  inputValue: string
  options: T[]
  getOptionSearchStrings: (option: T) => string[]
}

export const getSuggestions = <T>({
  inputValue,
  options,
  getOptionSearchStrings,
}: GetSuggestionsParams<T>) => {
  const matchString = inputValue.toLowerCase()

  const primaryMatches: T[] = []
  const secondaryMatches: T[] = []

  options.forEach((option) => {
    const searchStrings = getOptionSearchStrings(option).map((s) =>
      s.toLowerCase(),
    )
    if (searchStrings.find((s) => s.startsWith(matchString))) {
      primaryMatches.push(option)
    } else if (searchStrings.find((s) => s.includes(matchString))) {
      secondaryMatches.push(option)
    }
  })

  return [...primaryMatches, ...secondaryMatches]
}
