import { DistributionBar } from '@lib/ui/charts/DistributionBar'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useTheme } from 'styled-components'

export default makeDemoPage(() => {
  const {
    colors: { getLabelColor },
  } = useTheme()

  return (
    <DemoPage youtubeVideoId="5iF5YOoAdzY" title="DistributionBar">
      <DistributionBar
        items={[
          { value: 100, color: getLabelColor(1) },
          { value: 200, color: getLabelColor(5) },
          { value: 300, color: getLabelColor(8) },
        ]}
      />
    </DemoPage>
  )
})
