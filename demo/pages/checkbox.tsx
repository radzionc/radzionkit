import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { Checkbox } from '@reactkit/ui/inputs/Checkbox/Checkbox'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState(false)

  return (
    <DemoPage youtubeVideoId="qG-vLyAWufw" title="Checkbox">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Checkbox
          value={value}
          onChange={setValue}
          label="ReactKit is Awesome"
        />
      </div>
    </DemoPage>
  )
})
