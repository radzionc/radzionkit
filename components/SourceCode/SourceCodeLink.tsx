import { ExternalLink } from "navigation/Link/ExternalLink";
import { GhostButton } from "ui/buttons/rect/GhostButton";
import { GitHubIcon } from "ui/icons/GitHubIcon";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";

interface Props {
  to: string;
}

export const SourceCodeLink = ({ to }: Props) => {
  return (
    <ExternalLink to={to}>
      <GhostButton kind="secondary">
        <HStack alignItems="center" gap={6}>
          <Text as="span" color="regular">
            <GitHubIcon />
          </Text>
          <Text>source code</Text>
        </HStack>
      </GhostButton>
    </ExternalLink>
  );
};
