import { Entry } from '../entities/Entry'
export declare const toEntries: <K extends string, T>(
  record: Partial<Record<K, T>>,
) => Entry<K, T>[]
