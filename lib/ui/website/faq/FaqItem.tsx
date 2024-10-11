import { ExpandableSection } from '../../layout/ExpandableSection'
import { ComponentWithChildrenProps, TitledComponentProps } from '../../props'
import { Text } from '../../text'

type FaqItemProps = ComponentWithChildrenProps & TitledComponentProps

export const FaqItem = ({ children, title }: FaqItemProps) => (
  <ExpandableSection title={title}>
    <Text height="l">{children}</Text>
  </ExpandableSection>
)
