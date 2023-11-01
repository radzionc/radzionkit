import { DemoPage } from 'components/DemoPage'
import { AmountTextInput } from '@reactkit/ui/inputs/AmountTextInput'
import { DollarIcon } from '@reactkit/ui/icons/DollarIcon'
import { useState } from 'react'
import { AmountSuggestion } from '@reactkit/ui/inputs/AmountSuggestion'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const [value, setValue] = useState<number | undefined>(80000)

  return (
    <DemoPage youtubeVideoId="RH0Z8AdPXHY" title="Amount Input">
      <div style={{ width: 320 }}>
        <AmountTextInput
          value={value}
          label="Salary"
          onValueChange={setValue}
          unit={<DollarIcon />}
          suggestion={
            <AmountSuggestion name="Max" value={100000} onSelect={setValue} />
          }
        />
      </div>
    </DemoPage>
  )
})
