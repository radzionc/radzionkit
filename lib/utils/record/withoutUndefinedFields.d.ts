import { WithoutUndefinedFields } from '../types/WithoutUndefinedFields'
export declare function withoutUndefinedFields<T extends Record<string, any>>(
  record: T,
): WithoutUndefinedFields<T>
