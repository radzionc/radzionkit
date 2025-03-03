import { PieChart } from '@lib/ui/charts/PieChart'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useTheme } from 'styled-components'

export default makeDemoPage(() => {
  const {
    colors: { getLabelColor },
  } = useTheme()

  return (
    <DemoPage youtubeVideoId="OEZFzrwZMd8" title="Pie Chart">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <PieChart
          items={[
            { value: 500, color: getLabelColor(3) },
            { value: 300, color: getLabelColor(8) },
            { value: 200, color: getLabelColor(5) },
            { value: 100, color: getLabelColor(1) },
          ]}
        />
      </div>
    </DemoPage>
  )
})
