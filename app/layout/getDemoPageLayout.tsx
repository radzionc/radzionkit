import { GetLayout } from 'components/Page'
import { Navigation } from 'navigation'

export const getDemoPageLayout: GetLayout = (page) => (
  <Navigation>{page}</Navigation>
)
