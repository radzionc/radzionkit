import { DemoPage } from 'components/DemoPage'
import { Text } from '@radzionkit/ui/text'
import { makeDemoPage } from 'layout/makeDemoPage'
import { Hoverable } from '@radzionkit/ui/base/Hoverable'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="35XAA5Hgag0" title="Hoverable">
      <Hoverable>
        <Text weight="bold" color="primary">
          Hover me!
        </Text>
      </Hoverable>
    </DemoPage>
  )
})
