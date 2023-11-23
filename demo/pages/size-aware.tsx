import styled from 'styled-components'
import { Center } from '@reactkit/ui/layout/Center'
import { Text } from '@reactkit/ui/text'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@reactkit/ui/panel/Panel'
import { makeDemoPage } from 'layout/makeDemoPage'
import { takeWholeSpace } from '@reactkit/ui/css/takeWholeSpace'
import { ElementSizeAware } from '@reactkit/ui/base/ElementSizeAware'

const Container = styled(Panel)`
  ${takeWholeSpace}
`

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="PQ7QKBz_zWE" title="Size Aware">
      <ElementSizeAware
        render={({ setElement, size }) => (
          <Container ref={setElement}>
            <Center>
              {size && (
                <Text weight="bold" size={24}>
                  {Math.round(size.width)} x {Math.round(size.height)}
                </Text>
              )}
            </Center>
          </Container>
        )}
      />
    </DemoPage>
  )
})
