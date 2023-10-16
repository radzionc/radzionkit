import {
  getAttributeNameKey,
  getAttributesNamesParams,
  joinAttributeNames,
} from './attributes'

export const getRemoveParams = (params: Record<string, any>) => {
  const keys = Object.keys(params)

  return {
    UpdateExpression: `remove ${joinAttributeNames(
      keys.map(getAttributeNameKey),
    )}`,

    ...getAttributesNamesParams(keys),
  }
}
