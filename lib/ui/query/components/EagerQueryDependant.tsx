import { ReactNode } from 'react'
import { EagerQuery } from '../EagerQuery'

export interface EagerQueryDependantProps<T, E = unknown> {
  query: EagerQuery<T, E>
  pending: () => ReactNode
  error: () => ReactNode
  success: (data: T) => ReactNode
}

export function EagerQueryDependant<T>({
  query,
  error,
  pending,
  success,
}: EagerQueryDependantProps<T>) {
  if (query.data !== undefined) {
    return <>{success(query.data)}</>
  }

  if (query.isPending) {
    return <>{pending()}</>
  }

  if (query.errors.length > 0) {
    return <>{error()}</>
  }

  return null
}

export type QueryDependantWrapperProps<T> = Pick<
  EagerQueryDependantProps<T>,
  'success'
> &
  Partial<Pick<EagerQueryDependantProps<T>, 'error' | 'pending'>>
