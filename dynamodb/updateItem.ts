import { UpdateCommand } from '@aws-sdk/lib-dynamodb'
import { isNullOrUndefined } from '@reactkit/utils/isNullOrUndefined'
import { splitObject } from '@reactkit/utils/splitObject'
import { getUpdateParams } from './getUpdateParams'
import { getRemoveParams } from './getRemoveParams'
import { dbDocClient } from './client'
import { withoutUndefined } from '@reactkit/utils/array/withoutUndefined'
import { match } from '@reactkit/utils/match'

interface UpdateItemParams {
  tableName: string
  key: Record<string, string | number>
  fields: Record<string, any>
}

type Operation = 'remove' | 'update'

export const updateItem = ({ tableName, key, fields }: UpdateItemParams) => {
  const fieldsByOperation: Record<Operation, Record<string, any>> = splitObject(
    fields,
    (_, value) => (isNullOrUndefined(value) ? 'remove' : 'update'),
    {
      remove: {},
      update: {},
    },
  )

  const commands = withoutUndefined(
    Object.entries(fieldsByOperation).map(([operation, fields]) => {
      if (Object.keys(fields).length === 0) return undefined

      return new UpdateCommand({
        TableName: tableName,
        Key: key,
        ...match(operation as Operation, {
          update: () => getUpdateParams(fields),
          remove: () => getRemoveParams(fields),
        }),
      })
    }),
  )

  return Promise.all(commands.map((command) => dbDocClient.send(command)))
}
