import { range } from '@lib/utils/array/range'
import { D_IN_WEEK, getShortWeekday } from '@lib/utils/time'
import styled from 'styled-components'

import { Center } from '../../../layout/Center'
import { Text } from '../../../text'

import { CalendarFrame } from './CalendarFrame'

const Container = styled(CalendarFrame)`
  grid-template-rows: 24px;
`

export const WeekdayLabels = () => {
  return (
    <Container>
      {range(D_IN_WEEK).map((index) => (
        <Center key={index}>
          <Text size={12} color="supporting">
            {getShortWeekday(index)}
          </Text>
        </Center>
      ))}
    </Container>
  )
}
