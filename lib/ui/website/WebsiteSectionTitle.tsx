import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { text } from '../text'

export const WebsiteSectionTitle = styled.h2`
  ${text({
    size: 36,
    color: 'contrast',
    weight: 800,
    centerHorizontally: true,
  })}

  max-width: 440px;

  @media (max-width: 600px) {
    ${text({
      size: 24,
      color: 'contrast',
      weight: 700,
    })}
  }

  strong {
    ${text({
      weight: 800,
    })}
    color: ${getColor('textPrimary')};
  }
`
