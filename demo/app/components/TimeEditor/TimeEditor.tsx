import { useStartOfDay } from '@lib/ui/hooks/useStartOfDay'
import { Panel } from '@lib/ui/css/panel'
import { TimeInput } from '@lib/ui/timeline/TimeInput'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { TitledSection } from '@lib/ui/layout/TitledSection'
import { convertDuration } from '@lib/utils/time/convertDuration'

export const TimeEditor = () => {
  const startOfDay = useStartOfDay()

  const theme = useTheme()

  const initialValue = startOfDay + convertDuration(12, 'h', 'ms')

  const [value, setValue] = useState<number>(initialValue)

  return (
    <Panel style={{ width: 400 }}>
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
