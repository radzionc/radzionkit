import { isEmpty } from '@lib/utils/array/isEmpty'

import { EagerQuery, Query } from '../Query'

export const isInactiveQuery = <T>(
  query: Query<T> | EagerQuery<T>,
): boolean => {
  if (query.isLoading || query.data !== undefined) {
    return false
  }

  if ('errors' in query) {
    return isEmpty(query.errors)
  }

  return query.error === null
}
