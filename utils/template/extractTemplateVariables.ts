import { withoutDuplicates } from '../array/withoutDuplicates'

export const extractTemplateVariables = (str: string): string[] => {
  const variableRegex = /\{\{(\w+)\}\}/g
  const matches = str.match(variableRegex)
  if (!matches) return []

  return withoutDuplicates(matches.map((match) => match.slice(2, -2)))
}
