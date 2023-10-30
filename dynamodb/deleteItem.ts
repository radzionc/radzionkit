import { DeleteCommand } from '@aws-sdk/lib-dynamodb'
import { dbDocClient } from './client'

interface DeleteItemParams {
  tableName: string
  key: Record<string, string | number>
}

export const deleteItem = ({ tableName, key }: DeleteItemParams) => {
  const command = new DeleteCommand({
    TableName: tableName,
    Key: key,
  })

  return dbDocClient.send(command)
}
