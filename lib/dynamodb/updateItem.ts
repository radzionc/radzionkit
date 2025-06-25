import { UpdateCommand } from '@aws-sdk/lib-dynamodb'
import { without } from '@lib/utils/array/without'
import { isNullOrUndefined } from '@lib/utils/isNullOrUndefined'
import { match } from '@lib/utils/match'
import { splitRecord } from '@lib/utils/record/splitRecord'

import { dbDocClient } from './client'
import { getRemoveParams } from './getRemoveParams'
import { getUpdateParams } from './getUpdateParams'

interface UpdateItemParams {
  tableName: string
  key: Record<string, string | number>
  fields: Record<string, any>
}

type Operation = 'remove' | 'update'

export const updateItem = ({ tableName, key, fields }: UpdateItemParams) => {
  const fieldsByOperation: Record<Operation, Record<string, any>> = splitRecord(
    fields,
    (_, value) => (isNullOrUndefined(value) ? 'remove' : 'update'),
    {
      remove: {},
      update: {},
    },
  )

  const commands = without(
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
    undefined,
  )

  return Promise.all(commands.map((command) => dbDocClient.send(command)))
}
