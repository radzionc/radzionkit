import { Injector } from './Injector'

export const injectVariables: Injector<string> = ({
  template,
  variables,
  variablePattern,
}) => {
  return template.replace(variablePattern, (match, variableName) => {
    if (variableName in variables) {
      return variables[variableName]
    }
    return match
  })
}
