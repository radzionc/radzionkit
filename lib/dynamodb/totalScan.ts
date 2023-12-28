import { ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb'
import { fetchAll } from '@lib/utils/query/fetchAll'
import { dbDocClient } from './client'

export const totalScan = <T>(
  params: Omit<ScanCommandInput, 'ExclusiveStartKey'>,
): Promise<T[]> => {
  return fetchAll({
    fetch: (lastEvaluatedKey: ScanCommandInput['ExclusiveStartKey']) => {
      return dbDocClient.send(
        new ScanCommand({
          ExclusiveStartKey: lastEvaluatedKey,
          ...params,
        }),
      )
    },
    getItems: (response) => response.Items as T[],
    getNextPageParam: (response) => response.LastEvaluatedKey ?? null,
  })
}
