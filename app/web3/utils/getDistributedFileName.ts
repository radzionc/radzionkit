import { getLast } from '@reactkit/ui/shared/utils/getlast'

export const getDistributedFileName = (uri: string) =>
  decodeURI(getLast(uri.split('/')))
