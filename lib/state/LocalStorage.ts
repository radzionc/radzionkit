import { OnValueChangeListener, PersistentStorage } from "./PersistentStorage";

export class LocalStorage<T extends string> implements PersistentStorage<T> {
  listeners: Record<string, OnValueChangeListener<any>[]> = {};

  getItem<V>(key: T) {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === "null") return null as never as V;
    if (item === "undefined") return undefined;

    try {
      return JSON.parse(item) as V;
    } catch {}

    return item as never as V;
  }
  setItem<V>(key: T, value: V) {
    const oldValue = this.getItem(key);
    const newValue = JSON.stringify(value);
    if (oldValue === newValue) return;

    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }

    const listeners = this.listeners[key] || [];

    listeners.forEach((listener) => {
      listener(value, oldValue);
    });
  }
  addValueChangeListener<V>(
    key: string,
    listener: OnValueChangeListener<V>
  ): void {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }

    this.listeners[key].push(listener);
  }
  removeValueChangeListener<T>(
    key: string,
    listener: OnValueChangeListener<T>
  ): void {
    this.listeners[key] = (this.listeners[key] || []).filter(
      (l) => l !== listener
    );
  }
}
