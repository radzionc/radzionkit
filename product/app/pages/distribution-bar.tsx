import { DemoPage } from '@product/app/components/DemoPage'
import { useTheme } from 'styled-components'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'
import { DistributionBar } from '@lib/ui/charts/DistributionBar'

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
