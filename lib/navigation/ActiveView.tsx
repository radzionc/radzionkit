import { useNavigation } from './state'
import { Views } from './Views'

type ActiveViewProps = {
  views: Views
}

export const ActiveView = ({ views }: ActiveViewProps) => {
  const [state] = useNavigation()

  const View = views[state.history[state.currentIndex].id]

  return <View />
}
