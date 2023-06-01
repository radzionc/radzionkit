import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { Checkbox } from 'lib/ui/inputs/Checkbox/Checkbox'

const CheckboxPage: NextPage = () => {
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
}

export default CheckboxPage
