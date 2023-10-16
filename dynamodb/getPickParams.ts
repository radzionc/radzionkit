import {
  getAttributeNameKey,
  getAttributesNamesParams,
  joinAttributeNames,
} from './attributes'

export const getPickParams = (keys?: string[]) => {
  if (!keys) {
    return {}
  }

  return {
    ...getAttributesNamesParams(keys),
    ProjectionExpression: joinAttributeNames(
      keys.map((key) => getAttributeNameKey(key)),
    ),
  }
}
