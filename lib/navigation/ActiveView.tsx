import { getLastItem } from '@lib/utils/array/getLastItem'

import { useNavigation } from './state'
import { Views } from './Views'

type ActiveViewProps = {
  views: Views
}

export const ActiveView = ({ views }: ActiveViewProps) => {
  const [{ history }] = useNavigation()

  const { id } = getLastItem(history)
  const View = views[id]

  return <View />
}
