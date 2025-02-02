import { Button } from '../../buttons/Button'
import { HStack } from '../../css/stack'
import { NoDataIllustration } from '../../illustrations/NoDataIllustration'
import { ActionProp, OnRemoveProp, TitleProp } from '../../props'
import { Text } from '../../text'
import { EmptyStateContainer } from '../empty/EmptyStateContainer'
import { EmptyStateContent } from '../empty/EmptyStateContent'

type NoFilterMatchesProps = OnRemoveProp & TitleProp & ActionProp

export const NoFilterMatches = ({
  action,
  title,
  onRemove,
}: NoFilterMatchesProps) => {
  return (
    <EmptyStateContainer>
      <EmptyStateContent>
        <Text centerHorizontally size={20} weight="700" color="contrast">
          {title}
        </Text>
        <NoDataIllustration fontSize={100} />
        <HStack gap={8} alignItems="center">
          {onRemove && (
            <Button size="s" kind="outlined" onClick={onRemove}>
              Clear filter
            </Button>
          )}
          {action}
        </HStack>
      </EmptyStateContent>
    </EmptyStateContainer>
  )
}
