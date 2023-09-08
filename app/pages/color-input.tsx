import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { ColorLabelInput } from '@reactkit/ui/ui/inputs/ColorLabelInput'
import { Navigation } from 'navigation'

const ColorInputPage: NextPage = () => {
  const [value, setValue] = useState(0)

  return (
    <Navigation>
      <DemoPage youtubeVideoId="8nmwvgdbKP0" title="Color Label Input">
        <ColorLabelInput value={value} onChange={setValue} />
      </DemoPage>
    </Navigation>
  )
}

export default ColorInputPage
