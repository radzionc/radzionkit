import { Query } from '../Query'
import { ReactNode } from 'react'
import { useOnQueryFirstSuccess } from '../hooks/useOnQueryFirstSuccess'

export type QueryDependantProps<T, E = unknown> = {
  query: Query<T, E>
  error: (error: E) => ReactNode
  pending: () => ReactNode
  success: (data: T) => ReactNode
  onFirstSuccess?: (data: T) => void
}

export function QueryDependant<T, E = unknown>({
  query,
  error,
  pending,
  success,
  onFirstSuccess,
}: QueryDependantProps<T, E>) {
  useOnQueryFirstSuccess(query, onFirstSuccess)

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

export type QueryDependantWrapperProps<T, E = unknown> = Pick<
  QueryDependantProps<T>,
  'success'
> &
  Partial<Pick<QueryDependantProps<T, E>, 'error' | 'pending'>>
