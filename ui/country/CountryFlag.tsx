import styled from 'styled-components'
import { SafeImage } from '../ui/SafeImage'
import { CoverImage } from '../ui/images/CoverImage'
import { getColor } from '../ui/theme/getters'
import { UIComponentProps } from '../props'
import {
  CountryCode,
  countryNameRecord,
} from '@reactkit/utils/countryNameRecord'
import { centerContent } from '../css/centerContent'

interface CountryFlagProps extends UIComponentProps {
  code?: CountryCode
  source?: string
}

const Wrapper = styled.div`
  aspect-ratio: 4 / 3;
  background: ${getColor('mist')};
  overflow: hidden;
  ${centerContent};
`

export const CountryFlag = ({
  code,
  source = '/images/flags',
  ...props
}: CountryFlagProps) => {
  return (
    <Wrapper
      title={code ? countryNameRecord[code] || code : undefined}
      {...props}
    >
      {code && (
        <SafeImage
          src={code ? `${source}/${code.toLowerCase()}.svg` : undefined}
          render={(props) => (
            <CoverImage
              alt={countryNameRecord[code] || code}
              title={countryNameRecord[code] || code}
              {...props}
            />
          )}
        />
      )}
    </Wrapper>
  )
}
