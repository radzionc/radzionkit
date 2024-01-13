import styled from 'styled-components'
import { centeredContentColumn } from '../css/centeredContentColumn'
import { websiteConfig } from './config'
import { verticalPadding } from '../css/verticalPadding'

export const WebsiteSlice = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: websiteConfig.contentMaxWidth,
  })}

  ${verticalPadding(80)}
`
