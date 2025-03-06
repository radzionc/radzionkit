import styled from 'styled-components'

import { Match } from '../../base/Match'
import { centerContent } from '../../css/centerContent'
import { sameDimensions } from '../../css/sameDimensions'
import { HStack } from '../../css/stack'
import { CheckIcon } from '../../icons/CheckIcon'
import { Spinner } from '../../loaders/Spinner'
import { ChildrenProp, KindProp } from '../../props'
import { Text, TextColor } from '../../text'
import { getColor } from '../../theme/getters'

export type ProgressListItemKind = 'completed' | 'active' | 'pending'

const IndicatorContainer = styled.div`
  ${sameDimensions(24)}
  ${centerContent}
`

const CompletedIndicator = styled(CheckIcon)`
  color: ${getColor('success')};
`

const ActiveIndicator = styled(Spinner)`
  color: ${getColor('contrast')};
`

const kindToColor: Record<ProgressListItemKind, TextColor> = {
  completed: 'regular',
  active: 'contrast',
  pending: 'shy',
}

export const ProgressListItem = ({
  kind,
  children,
}: KindProp<ProgressListItemKind> & ChildrenProp) => {
  return (
    <HStack gap={12} alignItems="center">
      <IndicatorContainer>
        <Match
          value={kind}
          completed={() => <CompletedIndicator />}
          active={() => <ActiveIndicator />}
          pending={() => <div />}
        />
      </IndicatorContainer>
      <Text color={kindToColor[kind]}>{children}</Text>
    </HStack>
  )
}
