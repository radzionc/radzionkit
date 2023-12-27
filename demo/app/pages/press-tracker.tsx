import { DemoPage } from 'components/DemoPage'
import styled from 'styled-components'
import { Panel } from '@lib/ui/panel/Panel'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { PressTracker } from '@lib/ui/base/PressTracker'
import { getColor } from '@lib/ui/theme/getters'
import { toPercents } from '@lib/utils/toPercents'
import { makeDemoPage } from 'layout/makeDemoPage'

const Container = styled(Panel)`
  ${sameDimensions(320)}
  padding: 0;
`

const Highlight = styled.div`
  background: ${getColor('primary')};
`

export default makeDemoPage(() => {
  return (
    <DemoPage title="Press Tracker" youtubeVideoId="Gj4Szl5pYFM">
      <PressTracker
        render={({ props, position }) => (
          <Container {...props}>
            {position && (
              <Highlight
                style={{
                  width: toPercents(position.x),
                  height: toPercents(position.y),
                }}
              />
            )}
          </Container>
        )}
      />
    </DemoPage>
  )
})
