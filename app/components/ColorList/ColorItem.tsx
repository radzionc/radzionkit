import { HSLA } from '@reactkit/ui/colors/HSLA'
import { HStack } from '@reactkit/ui/layout/Stack'
import { Text } from '@reactkit/ui/ui/Text'
import { sameDimensions } from '@reactkit/ui/css/sameDimensions'
import styled from 'styled-components'
import { borderRadius } from '@reactkit/ui/css/borderRadius'

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
