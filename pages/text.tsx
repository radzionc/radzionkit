import type { NextPage } from "next"

import { DemoPage } from "components/DemoPage"
import { VStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"

const TextPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="vtqVjskVe1s" title="Text">
      <VStack gap={24}>
        <Text as="h2">Text component</Text>

        <Text>
          Text is likely the most used component in any app. Today I want to
          share a solid reusable Text component that is very useful in my
          front-end development work and should save time for you too.
        </Text>

        <Text weight="bold">Bold text</Text>

        <Text color="contrast">Contrast</Text>
        <Text color="contrast">Text</Text>
        <Text color="supporting">Text Supporting</Text>
        <Text color="shy">Text Shy</Text>
      </VStack>
    </DemoPage>
  )
}

export default TextPage
