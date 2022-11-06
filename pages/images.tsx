import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { range } from "lib/shared/utils/range";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { IntersectionAware } from "lib/ui/IntersectionAware";
import { ImageHolder } from "lib/ui/images/ImageHolder";
import { SafeImage } from "lib/ui/SafeImage";
import { CoverImage } from "lib/ui/images/CoverImage";
import { SameWidthChildrenRow } from "lib/ui/Layout/SameWidthChildrenRow";

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
  );
};

export default ImagesPage;
