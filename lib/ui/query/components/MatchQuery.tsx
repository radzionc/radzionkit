import { ComponentWithValueProps } from '../../props'
import { Query } from '../Query'
import { ReactNode } from 'react'

export type MatchQueryProps<T, E = unknown> = ComponentWithValueProps<
  Query<T, E>
> & {
  error?: (error: E) => ReactNode
  pending?: () => ReactNode
  success: (data: T) => ReactNode
  inactive?: () => ReactNode
}

export function MatchQuery<T, E = unknown>({
  value,
  error = () => null,
  pending = () => null,
  success,
  inactive = () => null,
}: MatchQueryProps<T, E>) {
  if (value.data !== undefined) {
    return <>{success(value.data)}</>
  }

  if (value.error) {
    return <>{error(value.error)}</>
  }

  if (value.isPending) {
    return <>{(value.isLoading === false ? inactive : pending)()}</>
  }

  return null
}

export type MatchQueryWrapperProps<T, E = unknown> = Pick<
  MatchQueryProps<T>,
  'success'
> &
  Partial<Pick<MatchQueryProps<T, E>, 'error' | 'pending' | 'inactive'>>
