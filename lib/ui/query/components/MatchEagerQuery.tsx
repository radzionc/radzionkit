import { ValueProp } from '@lib/utils/entities/props'
import { Defined } from '@lib/utils/types/Defined'
import { ReactNode } from 'react'

import { EagerQuery } from '../Query'

export type MatchEagerQueryProps<T, E = unknown> = ValueProp<
  EagerQuery<T, E>
> & {
  loading?: () => ReactNode
  error?: (errors: E[]) => ReactNode
  success?: (data: Defined<T>) => ReactNode
  inactive?: () => ReactNode
}

export function MatchEagerQuery<T, E = unknown>({
  value: { data, isPending, errors },
  error = () => null,
  loading = () => null,
  success = () => null,
  inactive = () => null,
}: MatchEagerQueryProps<T, E>) {
  if (data !== undefined) {
    return <>{success(data as Defined<T>)}</>
  }

  if (errors.length > 0) {
    return <>{error(errors)}</>
  }

  if (isPending) {
    return <>{loading()}</>
  }

  return <>{inactive()}</>
}

export type MatchEagerQueryWrapperProps<T> = Pick<
  MatchEagerQueryProps<T>,
  'success'
> &
  Partial<Pick<MatchEagerQueryProps<T>, 'error' | 'loading' | 'inactive'>>
