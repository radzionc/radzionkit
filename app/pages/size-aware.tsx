import styled from 'styled-components'
import { Center } from '@reactkit/ui/ui/Center'
import { ElementSizeAware } from '@reactkit/ui/ui/ElementSizeAware'
import { Text } from '@reactkit/ui/ui/Text'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@reactkit/ui/ui/Panel/Panel'
import { makeDemoPage } from 'layout/makeDemoPage'
import { takeWholeSpace } from '@reactkit/ui/css/takeWholeSpace'

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
