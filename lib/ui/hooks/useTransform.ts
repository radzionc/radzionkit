import { useMemo } from 'react'

export function useTransform<T, R>(value: T, transform: (value: T) => R): R {
  return useMemo(() => transform(value), [value, transform])
}
