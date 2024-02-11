import { ReactNode } from 'react'
import { EagerQuery } from '../Query'

export type EagerQueryDependantProps<T, E = unknown> = {
  query: EagerQuery<T, E>
  pending: () => ReactNode
  error: (errors: E[]) => ReactNode
  success: (data: T) => ReactNode
}

export function EagerQueryDependant<T, E = unknown>({
  query,
  error,
  pending,
  success,
}: EagerQueryDependantProps<T, E>) {
  if (query.data !== undefined) {
    return <>{success(query.data)}</>
  }

  if (query.isPending) {
    return <>{pending()}</>
  }

  if (query.errors.length > 0) {
    return <>{error(query.errors)}</>
  }

  return null
}

export type EagerQueryDependantWrapperProps<T> = Pick<
  EagerQueryDependantProps<T>,
  'success'
> &
  Partial<Pick<EagerQueryDependantProps<T>, 'error' | 'pending'>>
