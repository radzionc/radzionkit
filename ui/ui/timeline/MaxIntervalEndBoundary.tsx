import styled from 'styled-components'
import { Text } from 'ui/Text'

const Boundary = styled(Text)`
  position: absolute;
  width: 100%;
  font-size: 14px;
  border-top: 2px dashed;
`

interface Props {
  y: number
  isActive: boolean
  timestamp: number
}

export const MaxIntervalEndBoundary = ({ y, isActive, timestamp }: Props) => (
  <Boundary
    color="supporting"
    style={{
      top: y,
      opacity: isActive ? 1 : 0,
    }}
  >
    {new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    })}
  </Boundary>
)
