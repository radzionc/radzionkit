import { DemoPage } from '@demo/app/components/DemoPage'
import { useState } from 'react'
import { EmojiInput } from '@demo/app/components/EmojiInput'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState('👍')

  return (
    <DemoPage youtubeVideoId="sSGxGmUx00g" title="Emoji Input">
      <EmojiInput value={value} onChange={setValue} />
    </DemoPage>
  )
})
