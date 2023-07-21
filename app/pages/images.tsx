import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { range } from '@reactkit/ui/shared/utils/range'
import { VStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'
import { IntersectionAware } from '@reactkit/ui/ui/IntersectionAware'
import { ImageHolder } from '@reactkit/ui/ui/images/ImageHolder'
import { SafeImage } from '@reactkit/ui/ui/SafeImage'
import { CoverImage } from '@reactkit/ui/ui/images/CoverImage'
import { SameWidthChildrenRow } from '@reactkit/ui/ui/Layout/SameWidthChildrenRow'

const ImagesPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="vGJcbhz9uKY" title="Images">
      <SameWidthChildrenRow fullWidth minChildrenWidth={300} gap={40}>
        {range(50).map((index) => (
          <VStack alignItems="center" key={index} gap={8}>
            <Text color="supporting" weight="bold" size={20}>
              Image #{index + 1}
            </Text>
            <IntersectionAware<HTMLDivElement>
              render={({ ref, wasIntersected }) => (
                <ImageHolder ref={ref} width={240} height={360}>
                  {wasIntersected && (
                    <SafeImage
                      src={`https://picsum.photos/id/${index}/240/360`}
                      render={(props) => <CoverImage {...props} />}
                    />
                  )}
                </ImageHolder>
              )}
            />
          </VStack>
        ))}
      </SameWidthChildrenRow>
    </DemoPage>
  )
}

export default ImagesPage
