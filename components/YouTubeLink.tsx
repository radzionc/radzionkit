import { ExternalLink } from "lib/navigation/Link/ExternalLink";
import { GhostButton } from "lib/ui/buttons/rect/GhostButton";
import { YouTubeIcon } from "lib/ui/icons/YouTubeIcon";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  videoId: string;
}

export const YouTubeLink = ({ videoId }: Props) => {
  return (
    <ExternalLink to={`https://youtu.be/${videoId}`}>
      <GhostButton kind="secondary">
        <HStack alignItems="center" gap={6}>
          <Text as="span" color="regular">
            <YouTubeIcon />
          </Text>
          <Text>watch on YouTube</Text>
        </HStack>
      </GhostButton>
    </ExternalLink>
  );
};
