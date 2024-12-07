import { Confetti } from '@lib/ui/animations/Confetti'
import { Checkbox } from '@lib/ui/inputs/Checkbox/Checkbox'
import { useState } from 'react'
import styled from 'styled-components'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

const Container = styled.div`
  position: relative;
`

export default makeDemoPage(() => {
  const [value, setValue] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <DemoPage title="Confetti">
      <Container>
        <Checkbox
          label="Confetti!"
          value={value}
          onChange={() => {
            const newValue = !value
            setValue(newValue)
            setShowConfetti(newValue)
          }}
        />
        {showConfetti && <Confetti x={20} y={-20} />}
      </Container>
    </DemoPage>
  )
})
