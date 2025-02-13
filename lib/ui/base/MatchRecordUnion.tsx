import React from 'react'

type KeyOfUnion<U> = U extends any ? keyof U : never
type ValueForKey<U, K extends string | number | symbol> =
  U extends Record<K, infer V> ? V : never

export type MatchRecordUnionProps<U> = {
  value: U
  handlers: {
    [K in KeyOfUnion<U>]: (payload: ValueForKey<U, K>) => React.ReactNode
  }
}

export function MatchRecordUnion<U>({
  value,
  handlers,
}: MatchRecordUnionProps<U>) {
  const key = Object.keys(value as any)[0] as KeyOfUnion<U>
  const content = handlers[key]((value as any)[key])
  return <>{content}</>
}
