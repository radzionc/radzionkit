type InjectorInput = {
  template: string
  variables: Record<string, any>
  variablePattern: RegExp
}

export type Injector<R> = (input: InjectorInput) => R
