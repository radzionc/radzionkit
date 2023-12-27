import { HSLA } from '@lib/ui/colors/HSLA'
import { HStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import styled from 'styled-components'
import { borderRadius } from '@lib/ui/css/borderRadius'

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
