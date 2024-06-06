import {
  DynamoDBDocumentClient,
  QueryCommand,
  QueryCommandInput,
} from '@aws-sdk/lib-dynamodb'
import { fetchAll } from '@lib/utils/query/fetchAll'

export const totalQuery = <T>(
  client: DynamoDBDocumentClient,
  params: Omit<QueryCommandInput, 'ExclusiveStartKey'>,
): Promise<T[]> => {
  return fetchAll({
    fetch: (lastEvaluatedKey: QueryCommandInput['ExclusiveStartKey']) => {
      return client.send(
        new QueryCommand({
          ExclusiveStartKey: lastEvaluatedKey,
          ...params,
        }),
      )
    },
    getItems: (response) => response.Items as T[],
    getNextPageParam: (response) => response.LastEvaluatedKey ?? null,
  })
}
