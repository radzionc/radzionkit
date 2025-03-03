import { Panel } from '@lib/ui/css/panel'
import { useStartOfDay } from '@lib/ui/hooks/useStartOfDay'
import { TitledSection } from '@lib/ui/layout/TitledSection'
import { IntervalInput } from '@lib/ui/timeline/IntervalInput'
import { Interval } from '@lib/utils/interval/Interval'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { useState } from 'react'
import { useTheme } from 'styled-components'

export const CalendarEditor = () => {
  const startOfDay = useStartOfDay()

  const theme = useTheme()

  const [value, setValue] = useState<Interval>(() => ({
    start: startOfDay + convertDuration(12, 'h', 'ms'),
    end: startOfDay + convertDuration(13, 'h', 'ms'),
  }))

  return (
    <Panel style={{ width: 400 }}>
      <TitledSection title="Add Work Session">
        <IntervalInput
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
