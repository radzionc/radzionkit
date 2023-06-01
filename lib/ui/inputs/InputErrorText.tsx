import styled from 'styled-components'
import { Text } from 'lib/ui/Text'

export const InputErrorText = styled(Text)`
  --height: 0.86em;
  line-height: var(--height);
  font-size: var(--height);
  min-height: var(--height);
`
InputErrorText.defaultProps = {
  color: 'alert',
}
