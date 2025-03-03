import { FeatureVideo, FeatureVideoProps } from '@lib/ui/website/FeatureVideo'
import {
  WebsiteSectionHeader,
  WebsiteSectionHeaderProps,
} from '@lib/ui/website/WebsiteSectionHeader'
import { WebsiteSlice } from '@lib/ui/website/WebsiteSlice'
import { WebsiteSliceContent } from '@lib/ui/website/WebsiteSliceContent'

export type FeatureVideoSliceProps = FeatureVideoProps &
  WebsiteSectionHeaderProps

export const FeatureVideoSlice = ({
  videoId,
  ...rest
}: FeatureVideoSliceProps) => {
  return (
    <WebsiteSlice>
      <WebsiteSliceContent>
        <WebsiteSectionHeader {...rest} />
        <FeatureVideo videoId={videoId} />
      </WebsiteSliceContent>
    </WebsiteSlice>
  )
}
