import { EagerQuery } from '../Query'
import { Spinner } from '../../loaders/Spinner'
import { Tooltip } from '../../tooltips/Tooltip'
import styled from 'styled-components'
import { IconWrapper } from '../../icons/IconWrapper'
import { getColor } from '../../theme/getters'
import { Text } from '../../text'
import { AlertTriangleIcon } from '../../icons/AlertTriangeIcon'
import { VStack } from '../../layout/Stack'
import { getErrorMessage } from '@lib/utils/getErrorMessage'

export interface EagerQueryShyIndicatorProps<T> {
  query: EagerQuery<T>
}

const IconContainer = styled(IconWrapper)`
  color: ${getColor('alert')};
`

export function EagerQueryShyIndicator<T>({
  query,
}: EagerQueryShyIndicatorProps<T>) {
  if (query.isPending) {
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
