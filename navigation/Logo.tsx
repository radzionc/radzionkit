import { InternalLink } from "lib/navigation/Link/InternalLink";
import { Text } from "lib/ui/Text";
import { Path } from "./Path";

export const Logo = () => {
  return (
    <InternalLink to={Path.Home}>
      <Text size={18} color="regular" weight="bold">
        React
        <Text as="span" color="primary">
          Toolkit
        </Text>
      </Text>
    </InternalLink>
  );
};
