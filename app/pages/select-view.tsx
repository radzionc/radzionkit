import type { NextPage } from 'next'
import { getViewSetup } from '@reactkit/ui/shared/utils/getViewSetup'
import styled from 'styled-components'
import { ViewSelector } from '@reactkit/ui/ui/inputs/Select/ViewSelector'
import { VStack } from '@reactkit/ui/ui/Stack'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@reactkit/ui/ui/Panel/Panel'

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

const SelectViewPage: NextPage = () => {
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
}

export default SelectViewPage
