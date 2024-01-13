import styled from 'styled-components'

const testimonialsGap = '20px'

export const TestimonialsContainer = styled.div`
  column-gap: ${testimonialsGap};
  column-width: 320px;

  > * {
    margin-bottom: ${testimonialsGap};
  }
`
