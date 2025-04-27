import { ClientOnly } from '@lib/ui/base/ClientOnly'

import { CandlestickDemo } from '../components/candlestick/CandlestickDemo'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Candlestick Chart">
      <ClientOnly>
        <CandlestickDemo />
      </ClientOnly>
    </DemoPage>
  )
})
