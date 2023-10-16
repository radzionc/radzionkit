import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const dbClient = new DynamoDBClient()

export const dbDocClient = DynamoDBDocumentClient.from(dbClient, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
})
