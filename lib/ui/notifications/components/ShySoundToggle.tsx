import styled from 'styled-components'
import { InputProps } from '../../props'
import { UnstyledButton } from '../../buttons/UnstyledButton'
import { getColor } from '../../theme/getters'
import { transition } from '../../css/transition'
import { HStack } from '../../layout/Stack'
import { Text } from '../../text'
import { VolumeIcon } from '../../icons/VolumeIcon'
import { NoVolumeIcon } from '../../icons/NoVolumeIcon'
import { borderRadius } from '../../css/borderRadius'

interface ShySoundToggleProps extends InputProps<boolean> {
  style?: React.CSSProperties
}

const Container = styled(UnstyledButton)`
  background: ${getColor('mist')};
  ${borderRadius.s};
  padding: 4px 8px;
  ${transition};
  font-size: 14px;
`

export const ShySoundToggle = ({
  value,
  onChange,
  style,
}: ShySoundToggleProps) => {
  return (
    <Container onClick={() => onChange(!value)} style={style}>
      <HStack alignItems="center" gap={8}>
        {value ? <VolumeIcon /> : <NoVolumeIcon />}
        <Text>{value ? 'sound on' : 'sound off'}</Text>
      </HStack>
    </Container>
  )
}
