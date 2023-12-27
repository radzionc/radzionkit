import { arraysToRecord } from '@lib/utils/array/arraysToRecord'

export const getAttributeNameKey = (key: string) => `#${key.replace('.', '_')}`
export const getAttributeValueKey = (key: string) => `:${key}`

export const joinAttributeNames = (keys: string[]) => keys.join(', ')

export const getAttributesNamesParams = (keys: string[]) => ({
  ExpressionAttributeNames: arraysToRecord(keys.map(getAttributeNameKey), keys),
})

export const getAttributeParams = (params: Record<string, any>) => {
  const keys = Object.keys(params)

  return {
    ...getAttributesNamesParams(keys),

    ExpressionAttributeValues: arraysToRecord(
      keys.map(getAttributeValueKey),
      Object.values(params),
    ),
  }
}
