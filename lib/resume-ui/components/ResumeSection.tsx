import { VStack } from '@lib/ui/css/stack'
import { ComponentWithChildrenProps, UIComponentProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'

type ResumeSectionProps = ComponentWithChildrenProps &
  UIComponentProps & {
    title: ReactNode
  }

export const ResumeSection = ({
  title,
  children,
  ...rest
}: ResumeSectionProps) => (
  <VStack gap={20} {...rest}>
    <Text as="div" color="primary" weight="600">
      {title}
    </Text>
    {children}
  </VStack>
)
