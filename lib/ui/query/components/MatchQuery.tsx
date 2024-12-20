import { ReactNode } from 'react'

import { ComponentWithValueProps } from '../../props'
import { Query } from '../Query'

export type MatchQueryProps<T, E = unknown> = ComponentWithValueProps<
  Query<T, E>
> & {
  error?: (error: E) => ReactNode
  pending?: () => ReactNode
  success?: (data: T) => ReactNode
  inactive?: () => ReactNode
}

export function MatchQuery<T, E = unknown>({
  value,
  error = () => null,
  pending = () => null,
  success = () => null,
  inactive = () => null,
}: MatchQueryProps<T, E>) {
  if (value.data !== undefined) {
    return <>{success(value.data)}</>
  }

  if (value.error) {
    return <>{error(value.error)}</>
  }

  if (value.isLoading === false) {
    return <>{inactive()}</>
  }

  if (value.isPending) {
    return <>{pending()}</>
  }

  return null
}

export type MatchQueryWrapperProps<T, E = unknown> = Pick<
  MatchQueryProps<T>,
  'success'
> &
  Partial<Pick<MatchQueryProps<T, E>, 'error' | 'pending' | 'inactive'>>
