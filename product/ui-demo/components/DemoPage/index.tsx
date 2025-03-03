import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { HStack } from '@lib/ui/css/stack'
import { RegularPage } from '@lib/ui/layout/RegularPage'
import { ChildrenProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { SourceCodeLink } from '@product/ui-demo/components/SourceCode/SourceCodeLink'
import { YouTubeLink } from '@product/ui-demo/components/YouTubeLink'
import { useRouter } from 'next/router'

interface Props extends ChildrenProp {
  title: string
  seoTitle?: string
  seoDescription?: string
  youtubeVideoId?: string
}

export const DemoPage = ({
  title,
  seoTitle = title,
  seoDescription,
  youtubeVideoId,
  children,
}: Props) => {
  const { pathname } = useRouter()
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text as="h1" weight="600" size={24} color="regular">
            {title}
          </Text>
          <SourceCodeLink
            to={`https://github.com/radzionc/radzionkit/blob/main/demo/app/pages${pathname}.tsx`}
          />
          {youtubeVideoId && <YouTubeLink videoId={youtubeVideoId} />}
        </HStack>
      }
    >
      <PageMetaTags title={seoTitle} description={seoDescription} />
      {children}
    </RegularPage>
  )
}
