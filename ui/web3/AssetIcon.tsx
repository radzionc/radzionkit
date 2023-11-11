import styled from 'styled-components'
import { DiscIcon } from '../icons/DiscIcon'
import { SafeImage } from '../images/SafeImage'
import { getColor } from '../theme/getters'
import { CoverImage } from '../images/CoverImage'
import { sameDimensions } from '../css/sameDimensions'

interface AssetIconProps {
  src?: string
  name: string
}

const Icon = styled(CoverImage)`
  ${sameDimensions('1em')};
`

const Fallback = styled(DiscIcon)`
  color: ${getColor('mist')};
`

export const AssetIcon = ({ src, name }: AssetIconProps) => {
  return (
    <SafeImage
      src={src}
      render={(props) => <Icon {...props} alt={name} />}
      fallback={<Fallback />}
    />
  )
}
