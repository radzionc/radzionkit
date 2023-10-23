import { ReactNode } from 'react'
import { HStack } from '../../ui/Stack'
import { Text } from '../../ui/Text'
import { CheckCircleIcon } from '../../ui/icons/CheckCircleIcon'

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
