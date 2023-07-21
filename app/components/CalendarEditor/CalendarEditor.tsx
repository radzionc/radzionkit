import { millisecondsInHour } from "date-fns"
import { Interval } from "@reactkit/ui/entities/Interval"
import { useStartOfDay } from "@reactkit/ui/shared/hooks/useStartOfDay"
import { TitledSection } from "@reactkit/ui/ui/Layout/TitledSection"
import { Panel } from "@reactkit/ui/ui/Panel/Panel"
import { IntervalInput } from "@reactkit/ui/ui/timeline/IntervalInput"
import { useState } from "react"
import { useTheme } from "styled-components"

export const CalendarEditor = () => {
  const startOfDay = useStartOfDay()

  const theme = useTheme()

  const [value, setValue] = useState<Interval>(() => ({
    start: startOfDay + millisecondsInHour * 12,
    end: startOfDay + millisecondsInHour * 13,
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
          maxIntervalEnd={startOfDay + millisecondsInHour * 17}
        />
      </TitledSection>
    </Panel>
  )
}
