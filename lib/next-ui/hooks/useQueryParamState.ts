import { attempt, withFallback } from '@lib/utils/attempt'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { useHandleQueryParams } from './useHandleQueryParams'

const parseValue = <T>(value: any): T =>
  withFallback(
    attempt(() => JSON.parse(value) as T),
    value as T,
  )

export const useQueryParamState = <T extends number | string>(
  key: string,
  defaultValue: T,
) => {
  const [value, setValue] = useState<T>(defaultValue)

  const { push, query, pathname } = useRouter()

  const onChange = useCallback(
    (newValue: T) => {
      push({
        pathname,
        query: {
          ...query,
          [key]: newValue,
        },
      })
    },
    [key, pathname, query, push],
  )

  useHandleQueryParams<Record<string, T | undefined>>((params) => {
    if (params[key] === undefined) {
      return
    }

    const newValue = parseValue<T>(params[key])
    if (newValue === value) return

    setValue(newValue)
  })

  return [value, onChange] as const
}
