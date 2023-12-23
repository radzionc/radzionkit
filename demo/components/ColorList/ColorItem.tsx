import { HSLA } from '@radzionkit/ui/colors/HSLA'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'
import { sameDimensions } from '@radzionkit/ui/css/sameDimensions'
import styled from 'styled-components'
import { borderRadius } from '@radzionkit/ui/css/borderRadius'

interface Props {
  color: HSLA
  name: string
}

const Color = styled.div`
  ${sameDimensions(32)};
  ${borderRadius.m}
`

export const ColorItem = ({ color, name }: Props) => {
  return (
    <HStack alignItems="center" gap={8}>
      <Color style={{ background: color.toCssValue() }} />
      <Text color="supporting" weight="bold">
        {name}
      </Text>
    </HStack>
  )
}
