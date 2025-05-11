import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

import { NavigationDemo } from '../navigation-demo/NavigationDemo'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Navigation" youtubeVideoId="Atk9g-KT144">
      <NavigationDemo />
    </DemoPage>
  )
})
