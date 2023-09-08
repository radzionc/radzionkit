import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Switch } from '@reactkit/ui/ui/Switch/Switch'
import { useState } from 'react'
import { Navigation } from 'navigation'

const SwitchPage: NextPage = () => {
  const [value, setValue] = useState(false)

  return (
    <Navigation>
      <DemoPage youtubeVideoId="QydSYsxXRvw" title="Switch">
        <div style={{ maxWidth: 320, width: '100%' }}>
          <Switch
            value={value}
            onChange={setValue}
            label="ReactKit is Awesome"
          />
        </div>
      </DemoPage>
    </Navigation>
  )
}

export default SwitchPage
