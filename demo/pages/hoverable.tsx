import { DemoPage } from 'components/DemoPage'
import { Text } from '@reactkit/ui/text'
import { makeDemoPage } from 'layout/makeDemoPage'
import { Hoverable } from '@reactkit/ui/base/Hoverable'

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
