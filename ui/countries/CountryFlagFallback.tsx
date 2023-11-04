import { CountryCode } from '@reactkit/utils/countries'
import { SVGProps } from 'react'
import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { CountryFlagFrame } from './CountryFlagFrame'

export interface CountryFlagFallbackProps
  extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
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
