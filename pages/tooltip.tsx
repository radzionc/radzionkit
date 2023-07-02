import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { Tooltip } from "lib/ui/Tooltip"
import { Text } from "lib/ui/Text"

const TooltipPage: NextPage = () => {
  return (
    <DemoPage title="Tooltip">
      <Tooltip
        renderOpener={(props) => (
          <Text {...props} weight="semibold" color="supporting">
            Learn more about Increaser
          </Text>
        )}
        content={
          "The app empowers you to take the freedom from remote work to live a more productive, healthier, and happier life by leveraging its holistic toolkit for managing time effectively, getting into a deep focus state, and building positive habits."
        }
      />
    </DemoPage>
  )
}

export default TooltipPage
