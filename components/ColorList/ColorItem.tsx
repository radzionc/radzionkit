import { defaultBorderRadiusCSS } from 'lib/ui/borderRadius'
import { HSLA } from 'lib/ui/colors/HSLA'
import { HStack } from 'lib/ui/Stack'
import { Text } from 'lib/ui/Text'
import { getSameDimensionsCSS } from 'lib/ui/utils/getSameDimensionsCSS'
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
