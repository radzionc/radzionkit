import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  ms?: number;
}

export const ShowAfterDelay = ({ children, ms = 2000 }: Props) => {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShouldShow(true), ms);
  }, [ms]);

  if (!shouldShow) {
    return null;
  }

  return <>{children}</>;
};
