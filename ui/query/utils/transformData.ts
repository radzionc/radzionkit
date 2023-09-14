import { UseQueryResult } from 'react-query'

export const transformData = <T, V>(
  { data, ...rest }: UseQueryResult<T>,
  transform: (data: T) => V,
) => {
  return {
    ...rest,
    data: data !== undefined ? transform(data) : undefined,
  }
}
