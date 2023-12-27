export const pipe =
  <T>(...fns: ((arg: T) => T)[]) =>
  (arg: T) =>
    fns.reduce((acc, fn) => fn(acc), arg)
