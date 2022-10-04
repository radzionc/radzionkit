import { getLast } from "lib/shared/utils/getlast";

export const getDistributedFileName = (uri: string) =>
  decodeURI(getLast(uri.split("/")));
