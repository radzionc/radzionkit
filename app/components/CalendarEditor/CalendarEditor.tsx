import { Interval } from '@reactkit/utils/interval/Interval'
import { useStartOfDay } from '@reactkit/ui/hooks/useStartOfDay'
import { MS_IN_HOUR } from '@reactkit/utils/time'
import { TitledSection } from '@reactkit/ui/ui/Layout/TitledSection'
import { Panel } from '@reactkit/ui/ui/Panel/Panel'
import { IntervalInput } from '@reactkit/ui/ui/timeline/IntervalInput'
import { useState } from 'react'
import { useTheme } from 'styled-components'

export const CalendarEditor = () => {
  const startOfDay = useStartOfDay()

  const theme = useTheme()

  const [value, setValue] = useState<Interval>(() => ({
    start: startOfDay + MS_IN_HOUR * 12,
    end: startOfDay + MS_IN_HOUR * 13,
  }))

  return (
    <Panel width={400}>
      <TitledSection title="Add Work Session">
        <IntervalInput
          startOfDay={startOfDay}
          startHour={9}
          endHour={18}
          color={theme.colors.getLabelColor(5)}
          value={value}
          onChange={setValue}
          maxIntervalEnd={startOfDay + MS_IN_HOUR * 17}
        />
      </TitledSection>
    </Panel>
  )
}
