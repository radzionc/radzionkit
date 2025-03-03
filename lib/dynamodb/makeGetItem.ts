import { GetCommand } from '@aws-sdk/lib-dynamodb'

import { dbDocClient } from './client'
import { getPickParams } from './getPickParams'

interface MakeGetItemParams<I> {
  tableName: string
  getKey: (id: I) => Record<string, any>
}

export const makeGetItem = <I, R extends Record<string, any>>({
  tableName,
  getKey,
}: MakeGetItemParams<I>) => {
  const getItem = async <T extends (keyof R)[]>(
    id: I,
    attributes?: T,
  ): Promise<Pick<R, T[number]>> => {
    const command = new GetCommand({
      TableName: tableName,
      Key: getKey(id),
      ...getPickParams(attributes as string[]),
    })
    const { Item } = await dbDocClient.send(command)

    if (!Item) {
      throw new Error(
        `${tableName} doesn't have an item with id=${JSON.stringify(id)}`,
      )
    }

    return Item as Pick<R, T[number]>
  }

  return getItem
}
