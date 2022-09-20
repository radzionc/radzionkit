import { getLast } from 'shared/utils/getlast';

export const getDistributedFileName = (uri: string) =>
  decodeURI(getLast(uri.split('/')));
