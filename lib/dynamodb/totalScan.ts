import {
  DynamoDBDocumentClient,
  ScanCommand,
  ScanCommandInput,
} from '@aws-sdk/lib-dynamodb'
import { fetchAll } from '@lib/utils/query/fetchAll'

export const totalScan = <T>(
  client: DynamoDBDocumentClient,
  params: Omit<ScanCommandInput, 'ExclusiveStartKey'>,
): Promise<T[]> => {
  return fetchAll({
    fetch: (lastEvaluatedKey: ScanCommandInput['ExclusiveStartKey']) => {
      return client.send(
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
