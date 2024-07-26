import { ComponentWithChildrenProps } from '@lib/ui/props'
import { Page } from '../Page'

type WithLayoutInput = {
  page: Page
  layout: React.FC<ComponentWithChildrenProps>
}

export const withLayout = ({ page, layout: Layout }: WithLayoutInput) => {
  const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>

  page.getLayout = getLayout

  return page
}
