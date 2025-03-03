import { IntersectionAware } from '@lib/ui/base/IntersectionAware'
import { VStack } from '@lib/ui/css/stack'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { CoverImage } from '@lib/ui/images/CoverImage'
import { ImageHolder } from '@lib/ui/images/ImageHolder'
import { SafeImage } from '@lib/ui/images/SafeImage'
import { Text } from '@lib/ui/text'
import { range } from '@lib/utils/array/range'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="vGJcbhz9uKY" title="Images">
      <UniformColumnGrid fullWidth minChildrenWidth={300} gap={40}>
        {range(50).map((index) => (
          <VStack alignItems="center" key={index} gap={8}>
            <Text color="supporting" weight="600" size={20}>
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
      </UniformColumnGrid>
    </DemoPage>
  )
})
