import { centerContent } from '@lib/ui/css/centerContent'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { PictureIcon } from '@lib/ui/icons/PictureIcon'
import { ContainImage } from '@lib/ui/images/ContainImage'
import { SafeImage } from '@lib/ui/images/SafeImage'
import { getColor } from '@lib/ui/theme/getters'

import styled from 'styled-components'
import { UIComponentProps } from '../props'

type ImageAsIconProps = UIComponentProps & {
  src?: string
  name: string
}

const Icon = styled(ContainImage)`
  ${sameDimensions('1em')};
`

const Fallback = styled.div`
  ${round};
  ${sameDimensions('1em')};
  background: ${getColor('mist')};
  ${centerContent};
  color: ${getColor('textShy')};
  svg {
    font-size: 0.44em;
  }
`

export const ImageAsIcon = ({ src, name, ...rest }: ImageAsIconProps) => {
  return (
    <SafeImage
      src={src}
      render={(props) => <Icon {...props} {...rest} alt={name} />}
      fallback={
        <Fallback {...rest}>
          <PictureIcon />
        </Fallback>
      }
    />
  )
}
