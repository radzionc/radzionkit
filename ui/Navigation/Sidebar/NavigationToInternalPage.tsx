import { InternalLink } from "navigation/Link/InternalLink";
import { Path } from "navigation/Path";
import { useRouter } from "next/router";

import { NavigationItem } from "./NavigationItem";

interface Props {
  path: Path;
  name: string;
}

export const NavigationToInternalPage = ({ path, name }: Props) => {
  const router = useRouter();

  return (
    <InternalLink to={path}>
      <NavigationItem name={name} isActive={router.asPath === path} />
    </InternalLink>
  );
};
