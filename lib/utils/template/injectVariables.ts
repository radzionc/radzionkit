import { Injector } from './Injector'

export const injectVariables: Injector<string> = (template, variables) => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, variableName) => {
    if (variableName in variables) {
      return variables[variableName]
    }
    return match
  })
}
