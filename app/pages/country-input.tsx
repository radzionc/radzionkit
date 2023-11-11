import { CountryCode } from '@reactkit/utils/countries'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'
import { useState } from 'react'
import { CountryInput } from '@reactkit/ui/inputs/CountryInput'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 360px;
  min-width: 320px;
  width: 100%;
`

export default makeDemoPage(() => {
  const [value, setValue] = useState<CountryCode | null>('PT')

  return (
    <DemoPage title="Country Input">
      <Container>
        <CountryInput
          label="Country of residence"
          value={value}
          onChange={setValue}
        />
      </Container>
    </DemoPage>
  )
})
