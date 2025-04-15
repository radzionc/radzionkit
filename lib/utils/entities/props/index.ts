import { Milliseconds } from '../../time/types'

export type NameProp = {
  name: string
}

export type IdProp = {
  id: string
}

export type StartedAtProp = {
  startedAt: Milliseconds
}

export type ValueProp<T> = {
  value: T
}

export type IndexProp = {
  index: number
}
