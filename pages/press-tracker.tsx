import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import styled from "styled-components"
import { Panel } from "lib/ui/Panel/Panel"
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS"
import { PressTracker } from "lib/ui/PressTracker"
import { getColor } from "lib/ui/theme/getters"
import { toPercents } from "lib/shared/utils/toPercents"

const Container = styled(Panel)`
  ${getSameDimensionsCSS(320)}
  padding: 0;
`

const Highlight = styled.div`
  background: ${getColor("primary")};
`

const PressTrackerPage: NextPage = () => {
  return (
    <DemoPage title="Press Tracker">
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
}

export default PressTrackerPage
