import {
  getAttributeNameKey,
  getAttributeValueKey,
  getAttributeParams,
  joinAttributeNames,
} from './attributes'

export const getUpdateParams = (params: Record<string, any>) => {
  const keys = Object.keys(params)

  return {
    UpdateExpression: `set ${joinAttributeNames(
      keys.map((key) =>
        [getAttributeNameKey(key), getAttributeValueKey(key)].join(' = '),
      ),
    )}`,

    ...getAttributeParams(params),
  }
}
