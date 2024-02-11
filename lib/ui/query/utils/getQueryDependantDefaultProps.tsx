import { Spinner } from '../../loaders/Spinner'
import { Text } from '../../text'
import { QueryDependantProps } from '../components/QueryDependant'

export const getQueryDependantDefaultProps = (
  entityName: string,
): Pick<QueryDependantProps<unknown>, 'error' | 'pending'> => ({
  error: () => (
    <Text size={14} color="supporting">
      Failed to load {entityName}
    </Text>
  ),
  pending: () => <Spinner />,
})
