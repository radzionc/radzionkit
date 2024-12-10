import styled from 'styled-components'
import { Center } from '@lib/ui/layout/Center'
import { Text } from '@lib/ui/text'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { Panel } from '@lib/ui/css/panel'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { takeWholeSpace } from '@lib/ui/css/takeWholeSpace'
import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'

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
                <Text weight="600" size={24}>
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
