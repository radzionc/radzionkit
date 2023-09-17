import { Page } from 'components/Page'
import { getDemoPageLayout } from './getDemoPageLayout'

export const makeDemoPage = (page: Page) => {
  page.getLayout = getDemoPageLayout

  return page
}
