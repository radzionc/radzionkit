import { Text } from '@lib/ui/text'
import { IndexProp, ValueProp } from '@lib/utils/entities/props'

export const InputItem = ({ index, value }: IndexProp & ValueProp<number>) => {
  return (
    <Text>
      {String.fromCharCode(65 + index)}: {value.toFixed(2)}
    </Text>
  )
}
