import { HStack } from '@lib/ui/css/stack'
import { ReactNode } from 'react'

import { CheckCircleIcon } from '../../icons/CheckCircleIcon'
import { Text } from '../../text'

interface MembershipBenefitProps {
  benefit: ReactNode
}

export const MembershipBenefit = ({ benefit }: MembershipBenefitProps) => {
  return (
    <HStack alignItems="center" gap={8}>
      <Text style={{ display: 'flex' }} color="success">
        <CheckCircleIcon />
      </Text>
      <Text>{benefit}</Text>
    </HStack>
  )
}
