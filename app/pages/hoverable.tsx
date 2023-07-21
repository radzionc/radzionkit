import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { Hoverable } from "@reactkit/ui/ui/Hoverable"
import { Text } from "@reactkit/ui/ui/Text"

const HoberablePage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="35XAA5Hgag0" title="Hoverable">
      <Hoverable>
        <Text weight="bold" color="primary">
          Hover me!
        </Text>
      </Hoverable>
    </DemoPage>
  )
}

export default HoberablePage
