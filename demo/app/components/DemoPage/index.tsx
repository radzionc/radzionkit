import { SourceCodeLink } from '@demo/app/components/SourceCode/SourceCodeLink'
import { RegularPage } from '@lib/ui/layout/RegularPage'
import { HStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { useRouter } from 'next/router'
import { YouTubeLink } from '@demo/app/components/YouTubeLink'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

interface Props extends ComponentWithChildrenProps {
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
