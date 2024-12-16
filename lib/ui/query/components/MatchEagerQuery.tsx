import { ReactNode } from 'react'

import { ComponentWithValueProps } from '../../props'
import { EagerQuery } from '../Query'

export type MatchEagerQueryProps<T, E = unknown> = ComponentWithValueProps<
  EagerQuery<T, E>
> & {
  pending?: () => ReactNode
  error?: (errors: E[]) => ReactNode
  success: (data: T) => ReactNode
  inactive?: () => ReactNode
}

export function MatchEagerQuery<T, E = unknown>({
  value: { data, isPending, isLoading, errors },
  error = () => null,
  pending = () => null,
  success,
  inactive = () => null,
}: MatchEagerQueryProps<T, E>) {
  if (data !== undefined) {
    return <>{success(data)}</>
  }

  if (errors.length > 0) {
    return <>{error(errors)}</>
  }

  if (isLoading === false) {
    return <>{inactive()}</>
  }

  if (isPending) {
    return <>{pending()}</>
  }

  return null
}

export type MatchEagerQueryWrapperProps<T> = Pick<
  MatchEagerQueryProps<T>,
  'success'
> &
  Partial<Pick<MatchEagerQueryProps<T>, 'error' | 'pending' | 'inactive'>>
