import { DemoPage } from 'components/DemoPage'
import styled from 'styled-components'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { sameDimensions } from '@radzionkit/ui/css/sameDimensions'
import { PressTracker } from '@radzionkit/ui/base/PressTracker'
import { getColor } from '@radzionkit/ui/theme/getters'
import { toPercents } from '@radzionkit/utils/toPercents'
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
