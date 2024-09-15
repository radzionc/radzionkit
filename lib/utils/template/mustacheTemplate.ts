export const toMustacheTemplateVariable = (name: string) => `{{${name}}}`

export const mustacheVariablePattern = /\{\{(\w+)\}\}/g
