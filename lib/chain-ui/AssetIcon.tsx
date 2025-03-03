import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { DiscIcon } from '@lib/ui/icons/DiscIcon'
import { CoverImage } from '@lib/ui/images/CoverImage'
import { SafeImage } from '@lib/ui/images/SafeImage'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

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
