import { GetLayout, Page } from '@lib/next-ui/Page'

import { Navigation } from '../navigation'

export const getDemoPageLayout: GetLayout = (page) => (
  <Navigation>{page}</Navigation>
)

export const makeDemoPage = (page: Page) => {
  page.getLayout = getDemoPageLayout

  return page
}
