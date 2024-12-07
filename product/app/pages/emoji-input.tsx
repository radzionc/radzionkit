import { DemoPage } from '@product/app/components/DemoPage'
import { useState } from 'react'
import { EmojiInput } from '@product/app/components/EmojiInput'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState('👍')

  return (
    <DemoPage youtubeVideoId="sSGxGmUx00g" title="Emoji Input">
      <EmojiInput value={value} onChange={setValue} />
    </DemoPage>
  )
})
