import { getViewSetup } from '@lib/ui/view/getViewSetup'
import styled from 'styled-components'
import { ViewSelector } from '@lib/ui/inputs/Select/ViewSelector'
import { VStack } from '@lib/ui/layout/Stack'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@lib/ui/panel/Panel'
import { makeDemoPage } from 'layout/makeDemoPage'

export const views = ['primary', 'attention'] as const
export type View = (typeof views)[number]

export const { ViewProvider, useView, RenderView } = getViewSetup<View>(
  'primary',
  'View',
)

const ViewName: Record<View, string> = {
  primary: 'Primary',
  attention: 'Attention',
}

export const Selector = () => {
  const { view, setView } = useView()

  return (
    <ViewSelector
      options={views}
      getName={(option) => ViewName[option]}
      selectedOption={view}
      onSelect={setView}
      groupName="-view"
    />
  )
}

const PrimaryView = styled(Panel)`
  background: ${({ theme }) => theme.colors.primary.toCssValue()};
`

const AttentionView = styled(Panel)`
  background: ${({ theme }) => theme.colors.alert.toCssValue()};
`

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="aSiTQifBsAc" title="Select View">
      <Panel width={320}>
        <ViewProvider>
          <VStack fullWidth gap={20}>
            <Selector />
            <RenderView
              attention={() => <AttentionView />}
              primary={() => <PrimaryView />}
            />
          </VStack>
        </ViewProvider>
      </Panel>
    </DemoPage>
  )
})
