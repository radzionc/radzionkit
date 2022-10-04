import { useCallback, useState } from "react";

export function useBoolean(initial: boolean) {
  const [value, setValue] = useState(initial);

  const set = useCallback(() => setValue(true), []);
  const unset = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((old) => !old), []);

  return [value, { set, unset, toggle }] as const;
}
