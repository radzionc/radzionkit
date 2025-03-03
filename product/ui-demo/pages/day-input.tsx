import { InputContainer } from '@lib/ui/inputs/InputContainer'
import { InputLabel } from '@lib/ui/inputs/InputLabel'
import { DayInput } from '@lib/ui/time/day/DayInput'
import { Day, toDay } from '@lib/utils/time/Day'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { subYears } from 'date-fns'
import { useMemo, useState } from 'react'

import { DemoPage } from '../components/DemoPage'

export const getDefaultDob = () => toDay(subYears(Date.now(), 20).getTime())

const useDobBoundaries = () => {
  const maxDob = useMemo(() => toDay(subYears(Date.now(), 6).getTime()), [])
  const minDob = useMemo(() => toDay(subYears(Date.now(), 100).getTime()), [])

  return [minDob, maxDob]
}

export default makeDemoPage(() => {
  const [value, setValue] = useState<Day>(getDefaultDob)

  const [min, max] = useDobBoundaries()

  return (
    <DemoPage title="Day Input">
      <InputContainer as="div" style={{ gap: 8 }}>
        <InputLabel>Your date of birth</InputLabel>
        <DayInput min={min} max={max} value={value} onChange={setValue} />
      </InputContainer>
    </DemoPage>
  )
})
