import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { Hoverable } from "lib/ui/Hoverable"
import { Text } from "lib/ui/Text"

const HoberablePage: NextPage = () => {
  return (
    <DemoPage title="Hoverable">
      <Hoverable>
        <Text weight="bold" color="primary">
          Hover me!
        </Text>
      </Hoverable>
    </DemoPage>
  )
}

export default HoberablePage
