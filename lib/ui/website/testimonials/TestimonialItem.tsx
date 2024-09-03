import { HStack, VStack } from '../../layout/Stack'
import { Testimonial, profileTypeName } from './Testimonial'
import { Panel } from '@lib/ui/css/panel'
import styled from 'styled-components'
import { CoverImage } from '../../images/CoverImage'
import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'
import { SafeImage } from '../../images/SafeImage'
import { Text } from '../../text'
import { HStackSeparatedBy, dotSeparator } from '../../layout/StackSeparatedBy'
import { InteractiveText } from '../../text/InteractiveText'
import { ExternalLink } from '../../navigation/Link/ExternalLink'

type TestimonialItemProps = {
  testimonial: Testimonial
}

const Avatar = styled(CoverImage)`
  ${sameDimensions(48)};
  ${round};
`

export const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  const { content, name, profileType, profileUrl, imageUrl, position } =
    testimonial

  return (
    <Panel>
      <VStack gap={20}>
        <HStack alignItems="center" gap={16}>
          <SafeImage
            src={imageUrl}
            render={(props) => <Avatar alt={name} {...props} />}
          />
          <VStack gap={4}>
            <Text color="contrast" weight="500">
              {name}
            </Text>
            <Text as="div" color="supporting" size={14}>
              <HStackSeparatedBy separator={dotSeparator}>
                <Text>{position}</Text>
                <ExternalLink to={profileUrl}>
                  <InteractiveText>
                    {profileTypeName[profileType]}
                  </InteractiveText>
                </ExternalLink>
              </HStackSeparatedBy>
            </Text>
          </VStack>
        </HStack>
        <Text color="contrast" height="large">
          {content}
        </Text>
      </VStack>
    </Panel>
  )
}
