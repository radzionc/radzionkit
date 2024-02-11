import { Query } from '../Query'
import { ReactNode } from 'react'

export type QueryDependantProps<T, E = unknown> = {
  query: Query<T, E>
  error: (error: E) => ReactNode
  pending: () => ReactNode
  success: (data: T) => ReactNode
}

export function QueryDependant<T, E = unknown>({
  query,
  error,
  pending,
  success,
}: QueryDependantProps<T, E>) {
  if (query.data !== undefined) {
    return <>{success(query.data)}</>
  }

  if (query.isPending) {
    return <>{pending()}</>
  }

  if (query.error) {
    return <>{error(query.error)}</>
  }

  return null
}

export type QueryDependantWrapperProps<T> = Pick<
  QueryDependantProps<T>,
  'success'
> &
  Partial<Pick<QueryDependantProps<T>, 'error' | 'pending'>>
