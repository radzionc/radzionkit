import { ReactNode } from 'react'
import { HStack } from '../../layout/Stack'
import { textInputPadding } from '../../css/textInput'
import { IconWrapper } from '../../icons/IconWrapper'
import { identifierSize } from './config'
import { Text } from '../../text'

interface OptionContentProps {
  identifier: ReactNode
  name: ReactNode
}

export const OptionContent = ({ identifier, name }: OptionContentProps) => (
  <HStack alignItems="center" gap={textInputPadding}>
    <IconWrapper style={{ fontSize: identifierSize }}>{identifier}</IconWrapper>
    <Text as="div" cropped>
      {name}
    </Text>
  </HStack>
)
