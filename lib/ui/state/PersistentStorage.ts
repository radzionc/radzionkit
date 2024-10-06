import { ValueTransition } from '@lib/utils/entities/ValueTransition'

export type OnValueChangeListener<T> = (params: ValueTransition<T>) => void

export interface PersistentStorage<T extends string> {
  getItem<V>(T: string): V | undefined
  setItem<V>(T: string, value: V): void
  addValueChangeListener<V>(key: T, listener: OnValueChangeListener<V>): void
  removeValueChangeListener<V>(key: T, listener: OnValueChangeListener<V>): void
}
