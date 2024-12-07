import { useState } from 'react'
import { ColorLabelInput } from '@lib/ui/inputs/ColorLabelInput'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState(0)

  return (
    <DemoPage youtubeVideoId="8nmwvgdbKP0" title="Color Label Input">
      <ColorLabelInput value={value} onChange={setValue} />
    </DemoPage>
  )
})
