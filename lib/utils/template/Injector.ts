export type Injector<R> = (
  template: string,
  variables: Record<string, any>,
) => R
