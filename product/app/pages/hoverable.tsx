import { DemoPage } from '@product/app/components/DemoPage'
import { Text } from '@lib/ui/text'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'
import { Hoverable } from '@lib/ui/base/Hoverable'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="35XAA5Hgag0" title="Hoverable">
      <Hoverable>
        <Text weight="600" color="primary">
          Hover me!
        </Text>
      </Hoverable>
    </DemoPage>
  )
})
