import { useStartOfDay } from '@reactkit/ui/hooks/useStartOfDay'
import { MS_IN_HOUR } from '@reactkit/utils/time'
import { Panel } from '@reactkit/ui/panel/Panel'
import { TimeInput } from '@reactkit/ui/timeline/TimeInput'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { TitledSection } from '@reactkit/ui/layout/TitledSection'

export const TimeEditor = () => {
  const startOfDay = useStartOfDay()

  const theme = useTheme()

  const initialValue = startOfDay + MS_IN_HOUR * 12

  const [value, setValue] = useState<number>(initialValue)

  return (
    <Panel width={400}>
      <TitledSection title="Change Session Start Time">
        <TimeInput
          intialValue={initialValue}
          pxInHour={180}
          startOfDay={startOfDay}
          startHour={10}
          endHour={14}
          color={theme.colors.getLabelColor(5)}
          value={value}
          onChange={setValue}
          max={startOfDay + MS_IN_HOUR * 13}
        />
      </TitledSection>
    </Panel>
  )
}
