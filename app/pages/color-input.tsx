import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { useState } from "react"
import { ColorLabelInput } from "@reactkit/ui/ui/inputs/ColorLabelInput"

const ColorInputPage: NextPage = () => {
  const [value, setValue] = useState(0)

  return (
    <DemoPage youtubeVideoId="8nmwvgdbKP0" title="Color Label Input">
      <ColorLabelInput value={value} onChange={setValue} />
    </DemoPage>
  )
}

export default ColorInputPage
