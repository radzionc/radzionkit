import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { EmojiInput } from 'components/EmojiInput'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState('👍')

  return (
    <DemoPage youtubeVideoId="sSGxGmUx00g" title="Emoji Input">
      <EmojiInput value={value} onChange={setValue} />
    </DemoPage>
  )
})
