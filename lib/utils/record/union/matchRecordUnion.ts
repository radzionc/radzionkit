import { getRecordKeys } from '../getRecordKeys'

export function matchRecordUnion<
  U extends object,
  Keys extends string = Extract<keyof U, string>,
  R = never,
>(
  value: U,
  handlers: {
    [K in Keys]: (arg: U extends { [P in K]: infer Val } ? Val : never) => R
  },
): R {
  const [key] = getRecordKeys(value) as Keys[]

  const handler = handlers[key]

  const val = (value as Record<string, unknown>)[key]

  return handler(
    val as U extends { [P in typeof key]: infer Val } ? Val : never,
  )
}
