import { DemoPage } from 'components/DemoPage'
import { range } from '@radzionkit/utils/array/range'
import { VStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'
import { IntersectionAware } from '@radzionkit/ui/base/IntersectionAware'
import { ImageHolder } from '@radzionkit/ui/images/ImageHolder'
import { SafeImage } from '@radzionkit/ui/images/SafeImage'
import { CoverImage } from '@radzionkit/ui/images/CoverImage'
import { UniformColumnGrid } from '@radzionkit/ui/layout/UniformColumnGrid'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="vGJcbhz9uKY" title="Images">
      <UniformColumnGrid fullWidth minChildrenWidth={300} gap={40}>
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
      </UniformColumnGrid>
    </DemoPage>
  )
})
