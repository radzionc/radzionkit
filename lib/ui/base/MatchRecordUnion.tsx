import { ReactNode } from 'react'

import { getRecordKeys } from '../../utils/record/getRecordKeys'

type MatchRecordUnionProps<
  U extends object,
  Keys extends string = Extract<keyof U, string>,
  R = ReactNode,
> = {
  value: U
  handlers: {
    [K in Keys]: (arg: U extends { [P in K]: infer Val } ? Val : never) => R
  }
}

export function MatchRecordUnion<
  U extends object,
  Keys extends string = Extract<keyof U, string>,
  R = ReactNode,
>(props: MatchRecordUnionProps<U, Keys, R>) {
  const { value, handlers } = props
  const [key] = getRecordKeys(value) as Keys[]
  const handler = handlers[key]
  const val = (value as Record<string, unknown>)[key]

  return (
    <>
      {handler(val as U extends { [P in typeof key]: infer Val } ? Val : never)}
    </>
  )
}
