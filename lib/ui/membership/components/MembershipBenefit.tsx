import { ReactNode } from 'react'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '../../text'
import { CheckCircleIcon } from '../../icons/CheckCircleIcon'

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
