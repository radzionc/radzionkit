import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { Switch } from '@lib/ui/inputs/Switch'
import { useState } from 'react'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState(false)

  return (
    <DemoPage youtubeVideoId="QydSYsxXRvw" title="Switch">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Switch
          value={value}
          onChange={setValue}
          label="RadzionKit is Awesome"
        />
      </div>
    </DemoPage>
  )
})
