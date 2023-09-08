import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { Checkbox } from '@reactkit/ui/ui/inputs/Checkbox/Checkbox'
import { Navigation } from 'navigation'

const CheckboxPage: NextPage = () => {
  const [value, setValue] = useState(false)

  return (
    <Navigation>
      <DemoPage youtubeVideoId="qG-vLyAWufw" title="Checkbox">
        <div style={{ maxWidth: 320, width: '100%' }}>
          <Checkbox
            value={value}
            onChange={setValue}
            label="ReactKit is Awesome"
          />
        </div>
      </DemoPage>
    </Navigation>
  )
}

export default CheckboxPage
