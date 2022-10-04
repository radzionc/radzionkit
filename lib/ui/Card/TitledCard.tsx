import { ComponentProps, ReactNode } from "react";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

import { Card } from ".";

type Props = ComponentProps<typeof Card> & { title: ReactNode };

export const TitledCard = ({ title, children, ...rest }: Props) => (
  <Card {...rest}>
    <VStack gap={20}>
      <Text size={18} weight="bold" color="supporting2">
        {title}
      </Text>
      {children}
    </VStack>
  </Card>
);
