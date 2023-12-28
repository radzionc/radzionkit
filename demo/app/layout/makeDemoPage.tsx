import { Navigation } from '../navigation'
import { GetLayout, Page } from './Page'

export const getDemoPageLayout: GetLayout = (page) => (
  <Navigation>{page}</Navigation>
)

export const makeDemoPage = (page: Page) => {
  page.getLayout = getDemoPageLayout

  return page
}
