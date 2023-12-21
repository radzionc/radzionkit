import { ReactNode } from 'react'
import { HStack } from '../../layout/Stack'
import { textInputPadding } from '../../css/textInput'
import { IconWrapper } from '../../icons/IconWrapper'
import { Text } from '../../text'
import { dropdownInputConfig } from './config'

interface DropdownOptionContentProps {
  identifier: ReactNode
  name: ReactNode
}

export const DropdownOptionContent = ({
  identifier,
  name,
}: DropdownOptionContentProps) => (
  <HStack alignItems="center" gap={textInputPadding}>
    <IconWrapper style={{ fontSize: dropdownInputConfig.identifierSize }}>
      {identifier}
    </IconWrapper>
    <Text as="div" cropped>
      {name}
    </Text>
  </HStack>
)
