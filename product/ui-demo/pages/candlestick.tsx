import { VStack } from '@lib/ui/css/stack'

import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Candlestick Chart">
      <VStack fullWidth gap={4}>
        Candle stick chart will be here!
      </VStack>
    </DemoPage>
  )
})
