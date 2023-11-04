import { CountryCode } from '@reactkit/utils/countries'
import { SVGProps } from 'react'
import styled from 'styled-components'
import { getColor } from '../theme/getters'

export interface CountryFlagFallbackProps
  extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  code: CountryCode
}

const Container = styled.svg`
  background: ${getColor('mist')};
  text {
    fill: ${getColor('textSupporting')};
    font-size: 0.4em;
  }
`

export const CountryFlagFallback = ({
  code,
  ...props
}: CountryFlagFallbackProps) => (
  <Container width="1em" height="0.75em" {...props}>
    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle">
      {code}
    </text>
  </Container>
)
