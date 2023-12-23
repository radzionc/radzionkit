import { Countdown } from '@radzionkit/ui/countdown'
import { hoursToMilliseconds } from 'date-fns'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const endsAt = Date.now() + hoursToMilliseconds(24 * 10)
  return (
    <DemoPage youtubeVideoId="70-0EZT650o" title="Countdown">
      <Countdown endsAt={endsAt} />
    </DemoPage>
  )
})
