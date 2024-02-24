import { useState } from 'react'

type UseSearchInput<T> = {
  items: T[]
  getSearchStrings: (item: T) => string[]
}

export const useSearch = <T>(props: UseSearchInput<T>) => {
  const [searchString, setSearchString] = useState('')

  return {
    searchString,
    setSearchString,
    matches: props.items.filter((item) =>
      props
        .getSearchStrings(item)
        .some((str) => str.toLowerCase().includes(searchString.toLowerCase())),
    ),
  }
}
