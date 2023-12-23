import { match } from '@radzionkit/utils/match'
import { getEnvVar } from './getEnvVar'

type TableName = 'users'

export const getTableName = (tableName: TableName) =>
  match(tableName, {
    users: () => getEnvVar('USERS_TABLE'),
  })
