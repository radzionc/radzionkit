import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { useState } from "react"
import { EmojiInput } from "@reactkit/ui/ui/inputs/EmojiInput"

const EmojiInputPage: NextPage = () => {
  const [value, setValue] = useState("👍")

  return (
    <DemoPage youtubeVideoId="sSGxGmUx00g" title="Emoji Input">
      <EmojiInput value={value} onChange={setValue} />
    </DemoPage>
  )
}

export default EmojiInputPage
