import { Spinner } from '../../ui/Spinner'
import { Text } from '../../ui/Text'
import { QueryDependantProps } from '../components/QueryDependant'

export const getQueryDependantDefaultProps = (
  entityName: string,
): Pick<QueryDependantProps<unknown>, 'error' | 'loading'> => ({
  error: () => (
    <Text size={14} color="supporting">
      Failed to load {entityName}
    </Text>
  ),
  loading: () => <Spinner />,
})
