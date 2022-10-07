import { ComponentWithChildrenProps } from "lib/shared/props";
import { useEffect, useState } from "react";

export const ClientOnly = ({ children }: ComponentWithChildrenProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
