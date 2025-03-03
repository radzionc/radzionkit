import styled from 'styled-components'

import { centeredContentColumn } from '../css/centeredContentColumn'
import { toSizeUnit } from '../css/toSizeUnit'
import { verticalPadding } from '../css/verticalPadding'

import { websiteConfig } from './config'

export const WebsiteSlice = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: websiteConfig.contentMaxWidth,
  })}

  ${verticalPadding(80)}
`

export const PrimaryWebsiteSlice = styled(WebsiteSlice)`
  min-height: calc(100vh - ${toSizeUnit(websiteConfig.headerHeight)});
`
