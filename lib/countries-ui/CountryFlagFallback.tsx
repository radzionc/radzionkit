import { CountryCode } from '@lib/countries'
import { SvgProps } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { CountryFlagFrame } from './CountryFlagFrame'

export interface CountryFlagFallbackProps extends SvgProps {
  code: CountryCode
}

const Container = styled(CountryFlagFrame)`
  text {
    fill: ${getColor('textSupporting')};
    font-size: 0.4em;
  }
`

export const CountryFlagFallback = ({
  code,
  ...props
}: CountryFlagFallbackProps) => (
  <Container {...props}>
    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle">
      {code}
    </text>
  </Container>
)
