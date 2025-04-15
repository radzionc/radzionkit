import { ValueProp } from '@lib/utils/entities/props'
import { ReactNode } from 'react'

import { EagerQuery } from '../Query'

export type MatchEagerQueryProps<T, E = unknown> = ValueProp<
  EagerQuery<T, E>
> & {
  pending?: () => ReactNode
  error?: (errors: E[]) => ReactNode
  success?: (data: T) => ReactNode
  inactive?: () => ReactNode
}

export function MatchEagerQuery<T, E = unknown>({
  value: { data, isPending, isLoading, errors },
  error = () => null,
  pending = () => null,
  success = () => null,
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
