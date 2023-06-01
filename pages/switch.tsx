import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Switch } from 'lib/ui/Switch/Switch'
import { useState } from 'react'

const SwitchPage: NextPage = () => {
  const [value, setValue] = useState(false)

  return (
    <DemoPage youtubeVideoId="QydSYsxXRvw" title="Switch">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Switch value={value} onChange={setValue} label="ReactKit is Awesome" />
      </div>
    </DemoPage>
  )
}

export default SwitchPage
