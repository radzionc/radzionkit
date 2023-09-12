import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { InteractivePromotion } from '@reactkit/ui/ui/InteractivePromotion'
import styled from 'styled-components'

import { ShowAfterDelay } from '@reactkit/ui/ui/ShowAfterDelay'
import { Navigation } from 'navigation'
import { takeWholeSpace } from '@reactkit/ui/css/takeWholeSpace'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'

const Image = styled.img`
  ${takeWholeSpace};
  object-fit: contain;
`

const PromotionPage: NextPage = () => {
  const [wasShown, setWasShown] = usePersistentState(
    PersistentStateKey.Promotion,
    false,
  )
  return (
    <Navigation>
      <DemoPage youtubeVideoId="Cnv0K3izNUk" title="Interactive Promotion">
        {!wasShown && (
          <ShowAfterDelay ms={3000}>
            <InteractivePromotion
              onDismiss={() => setWasShown(true)}
              onAccept={() => setWasShown(true)}
              url="https://increaser.org"
              text="Hi there! Can I share a tool for deep work with you?"
              character={<Image src="/images/hello.png" alt="hello" />}
              speechPlacement={{
                left: 280,
                bottom: 28,
              }}
            />
          </ShowAfterDelay>
        )}
      </DemoPage>
    </Navigation>
  )
}

export default PromotionPage
