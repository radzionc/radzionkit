import { ValueProp } from '@lib/utils/entities/props'
import { Defined } from '@lib/utils/types/Defined'
import { ReactNode } from 'react'

import { Query } from '../Query'

export type MatchQueryProps<T, E = unknown> = ValueProp<Query<T, E>> & {
  error?: (error: E) => ReactNode
  loading?: () => ReactNode
  success?: (data: Defined<T>) => ReactNode
  inactive?: () => ReactNode
}

export function MatchQuery<T, E = unknown>({
  value,
  error = () => null,
  loading = () => null,
  success = () => null,
  inactive = () => null,
}: MatchQueryProps<T, E>) {
  if (value.data !== undefined) {
    return <>{success(value.data as Defined<T>)}</>
  }

  if (value.error) {
    return <>{error(value.error)}</>
  }

  if (value.isPending) {
    return <>{loading()}</>
  }

  return <>{inactive()}</>
}

export type MatchQueryWrapperProps<T, E = unknown> = Pick<
  MatchQueryProps<T>,
  'success'
> &
  Partial<Pick<MatchQueryProps<T, E>, 'error' | 'loading' | 'inactive'>>
