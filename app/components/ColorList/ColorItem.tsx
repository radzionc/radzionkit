import { defaultBorderRadiusCSS } from '@reactkit/ui/ui/borderRadius'
import { HSLA } from '@reactkit/ui/ui/colors/HSLA'
import { HStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'
import { getSameDimensionsCSS } from '@reactkit/ui/ui/utils/getSameDimensionsCSS'
import styled from 'styled-components'

interface Props {
  color: HSLA
  name: string
}

const Color = styled.div`
  ${getSameDimensionsCSS(32)};
  ${defaultBorderRadiusCSS};
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
