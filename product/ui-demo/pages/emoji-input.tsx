import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { EmojiInput } from '@product/ui-demo/components/EmojiInput'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useState } from 'react'

export default makeDemoPage(() => {
  const [value, setValue] = useState('👍')

  return (
    <DemoPage youtubeVideoId="sSGxGmUx00g" title="Emoji Input">
      <EmojiInput value={value} onChange={setValue} />
    </DemoPage>
  )
})
