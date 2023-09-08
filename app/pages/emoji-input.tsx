import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { EmojiInput } from 'components/EmojiInput'
import { Navigation } from 'navigation'

const EmojiInputPage: NextPage = () => {
  const [value, setValue] = useState('👍')

  return (
    <Navigation>
      <DemoPage youtubeVideoId="sSGxGmUx00g" title="Emoji Input">
        <EmojiInput value={value} onChange={setValue} />
      </DemoPage>
    </Navigation>
  )
}

export default EmojiInputPage
