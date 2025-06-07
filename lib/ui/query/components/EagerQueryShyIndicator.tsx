import { VStack } from '@lib/ui/css/stack'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import styled from 'styled-components'

import { AlertTriangleIcon } from '../../icons/AlertTriangeIcon'
import { IconWrapper } from '../../icons/IconWrapper'
import { Spinner } from '../../loaders/Spinner'
import { Text } from '../../text'
import { getColor } from '../../theme/getters'
import { Tooltip } from '../../tooltips/Tooltip'
import { EagerQuery } from '../Query'
import { isInactiveQuery } from '../utils/isInactiveQuery'

export interface EagerQueryShyIndicatorProps<T> {
  query: EagerQuery<T>
}

const IconContainer = styled(IconWrapper)`
  color: ${getColor('alert')};
`

export function EagerQueryShyIndicator<T>({
  query,
}: EagerQueryShyIndicatorProps<T>) {
  if (isInactiveQuery(query)) {
    return <Spinner />
  }

  if (query.errors.length > 0) {
    return (
      <Tooltip
        renderOpener={(props) => (
          <IconContainer {...props}>
            <AlertTriangleIcon />
          </IconContainer>
        )}
        content={
          <VStack gap={8}>
            {query.errors.map((error) => (
              <Text size={12}>{getErrorMessage(error)}</Text>
            ))}
          </VStack>
        }
      />
    )
  }

  return null
}
