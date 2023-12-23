import { useStartOfDay } from '@radzionkit/ui/hooks/useStartOfDay'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { TimeInput } from '@radzionkit/ui/timeline/TimeInput'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { TitledSection } from '@radzionkit/ui/layout/TitledSection'
import { convertDuration } from '@radzionkit/utils/time/convertDuration'

export const TimeEditor = () => {
  const startOfDay = useStartOfDay()

  const theme = useTheme()

  const initialValue = startOfDay + convertDuration(12, 'h', 'ms')

  const [value, setValue] = useState<number>(initialValue)

  return (
    <Panel width={400}>
      <TitledSection title="Change Session Start Time">
        <TimeInput
          intialValue={initialValue}
          timelineStartsAt={startOfDay + convertDuration(10, 'h', 'ms')}
          timelineEndsAt={startOfDay + convertDuration(15, 'h', 'ms')}
          color={theme.colors.getLabelColor(5)}
          value={value}
          onChange={setValue}
        />
      </TitledSection>
    </Panel>
  )
}
