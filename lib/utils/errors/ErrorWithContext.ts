export class ErrorWithContext<T extends Record<string, any>> extends Error {
  constructor(
    message: string,
    public context: T,
  ) {
    super(message)
  }
}
