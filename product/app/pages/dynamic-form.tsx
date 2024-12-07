import { JobApplication } from '@product/app/components/JobApplication'
import { DemoPage } from '@product/app/components/DemoPage'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Dynamic Form" youtubeVideoId="QYVlkk6WMmc">
      <JobApplication />
    </DemoPage>
  )
})
