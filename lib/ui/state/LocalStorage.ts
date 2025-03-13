import { attempt } from '@lib/utils/attempt'
import { ValueTransition } from '@lib/utils/entities/ValueTransition'
import { recordMap } from '@lib/utils/record/recordMap'

import { OnValueChangeListener, PersistentStorage } from './PersistentStorage'

export class LocalStorage<T extends string> implements PersistentStorage<T> {
  listeners: Record<string, OnValueChangeListener<any>[]> = {}

  cache: Record<string, any> = {}

  constructor() {
    window.addEventListener('storage', this.handleStorageEvent)
  }

  private updateCache = (key: string, newValue: any) => {
    if (newValue === undefined) {
      delete this.cache[key]
    } else {
      this.cache[key] = newValue
    }
  }

  private handleStorageEvent = (event: StorageEvent) => {
    const { key, newValue, oldValue } = event

    if (!key) return

    const transition = recordMap({ oldValue, newValue }, this.parseValue)

    this.updateCache(key, transition.newValue)

    this.notifyListeners(key, transition)
  }

  private notifyListeners = <V>(
    key: string,
    transition: ValueTransition<V>,
  ): void => {
    const listeners = this.listeners[key] || []

    listeners.forEach((listener) => {
      listener(transition)
    })
  }

  private parseValue = <V>(value: string | null): V | undefined => {
    if (value === null) return undefined
    if (value === 'null') return null as unknown as V
    if (value === 'undefined') return undefined

    return attempt(() => JSON.parse(value) as V, value as unknown as V)
  }

  getItem<V>(key: T): V | undefined {
    if (key in this.cache) {
      return this.cache[key]
    }

    const item = localStorage.getItem(key)
    const value = this.parseValue<V>(item)
    this.updateCache(key, value)

    return value
  }

  setItem<V>(key: T, newValue: V): void {
    const oldValue = this.getItem<V>(key)
    const newValueString = JSON.stringify(newValue)
    const oldValueString = JSON.stringify(oldValue)

    if (oldValueString === newValueString) return

    if (newValue === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, newValueString)
    }

    this.updateCache(key, newValue)

    this.notifyListeners(key, {
      oldValue,
      newValue,
    })
  }

  addValueChangeListener<V>(
    key: string,
    listener: OnValueChangeListener<V>,
  ): void {
    if (!this.listeners[key]) {
      this.listeners[key] = []
    }

    this.listeners[key].push(listener)
  }

  removeValueChangeListener<V>(
    key: string,
    listener: OnValueChangeListener<V>,
  ): void {
    this.listeners[key] = (this.listeners[key] || []).filter(
      (l) => l !== listener,
    )
  }
}
