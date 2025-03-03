import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { JobApplication } from '@product/ui-demo/components/JobApplication'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Dynamic Form" youtubeVideoId="QYVlkk6WMmc">
      <JobApplication />
    </DemoPage>
  )
})
