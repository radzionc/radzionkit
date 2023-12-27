export const injectVariables = (
  template: string,
  variables: Record<string, string>,
): string => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, variableName) => {
    if (variableName in variables) {
      return variables[variableName]
    }
    return match
  })
}
