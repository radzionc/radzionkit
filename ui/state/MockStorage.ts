import { PersistentStorage } from './PersistentStorage'

export class MockStorage<T extends string> implements PersistentStorage<T> {
  getItem() {
    return undefined
  }
  setItem() {}
  addValueChangeListener<V>(): void {}
  removeValueChangeListener<T>(): void {}
}
