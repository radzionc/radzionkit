import styled from 'styled-components'
import { Center } from '@radzionkit/ui/layout/Center'
import { Text } from '@radzionkit/ui/text'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { makeDemoPage } from 'layout/makeDemoPage'
import { takeWholeSpace } from '@radzionkit/ui/css/takeWholeSpace'
import { ElementSizeAware } from '@radzionkit/ui/base/ElementSizeAware'

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
