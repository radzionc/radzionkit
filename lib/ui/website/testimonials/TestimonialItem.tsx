import { Panel } from '@lib/ui/css/panel'
import { HStack, VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { round } from '../../css/round'
import { sameDimensions } from '../../css/sameDimensions'
import { CoverImage } from '../../images/CoverImage'
import { SafeImage } from '../../images/SafeImage'
import { HStackSeparatedBy, dotSeparator } from '../../layout/StackSeparatedBy'
import { ExternalLink } from '../../navigation/Link/ExternalLink'
import { Text } from '../../text'
import { InteractiveText } from '../../text/InteractiveText'

import { Testimonial, profileTypeName } from './Testimonial'

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
              <HStackSeparatedBy separator={dotSeparator} gap={8} wrap="wrap">
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
        <Text color="contrast" height="l">
          {content}
        </Text>
      </VStack>
    </Panel>
  )
}
