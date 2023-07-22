import { OnValueChangeListener, PersistentStorage } from './PersistentStorage'

export class TemporaryStorage<T extends string> implements PersistentStorage<T> {
  storage: Record<string, unknown> = {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listeners: Record<string, OnValueChangeListener<any>[]> = {}

  getItem<V>(key: T) {
    return this.storage[key] as V
  }
  setItem<V>(key: T, value: V) {
    const oldValue = this.getItem(key)
    if (oldValue === value) return

    if (value === undefined) {
      delete this.storage[key]
    } else {
      this.storage[key] = value
    }

    const listeners = this.listeners[key] || []

    listeners.forEach((listener) => {
      listener(value, oldValue)
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
  removeValueChangeListener<T>(
    key: string,
    listener: OnValueChangeListener<T>,
  ): void {
    this.listeners[key] = (this.listeners[key] || []).filter(
      (l) => l !== listener,
    )
  }
}
