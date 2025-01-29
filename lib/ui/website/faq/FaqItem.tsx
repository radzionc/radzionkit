import { ExpandableSection } from '../../layout/ExpandableSection'
import { ChildrenProp, TitleProp } from '../../props'
import { Text } from '../../text'

type FaqItemProps = ChildrenProp & TitleProp

export const FaqItem = ({ children, title }: FaqItemProps) => (
  <ExpandableSection title={title}>
    <Text height="l">{children}</Text>
  </ExpandableSection>
)
