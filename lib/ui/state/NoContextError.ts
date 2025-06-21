export class NoContextError extends Error {
  contextId: string

  constructor(contextId: string) {
    super(`No context provided for ${contextId}`)
    this.contextId = contextId
  }
}
