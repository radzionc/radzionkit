import { useMedia } from "react-use";
import { getCSSUnit } from "lib/ui/utils/getCSSUnit";

export const useIsScreenWidthLessThan = (width: number | string) => {
  return useMedia(`(max-width: ${getCSSUnit(width)})`, false);
};
