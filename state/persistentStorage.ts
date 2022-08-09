import { MockStorage } from "lib/state/MockStorage";
import { LocalStorage } from "lib/state/LocalStorage";

export enum PersistentStorageKey {
  ThemePreference = "themePreference",
}

export const persistentStorage =
  typeof window !== "undefined"
    ? new LocalStorage<PersistentStorageKey>()
    : new MockStorage<PersistentStorageKey>();
