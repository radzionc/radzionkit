import { centerContent } from '@lib/ui/css/centerContent'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { getColor } from '@lib/ui/theme/getters'
import { websiteConfig } from '@lib/ui/website/config'
import styled from 'styled-components'

export const FadeOutImageSlice = styled.div<{ imageUrl: string }>`
  width: 100%;
  min-height: calc(100vh - ${toSizeUnit(websiteConfig.headerHeight)});
  ${centerContent}
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      ${getColor('background')} 0%,
      ${getColor('transparent')} 25%,
      ${getColor('transparent')} 80%,
      ${getColor('background')} 100%
    );
    pointer-events: none;
  }
`
