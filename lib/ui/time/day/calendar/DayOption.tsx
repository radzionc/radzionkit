import styled, { css } from 'styled-components'

import { UnstyledButton } from '../../../buttons/UnstyledButton'
import { borderRadius } from '../../../css/borderRadius'
import { centerContent } from '../../../css/centerContent'
import { interactive } from '../../../css/interactive'
import { IsActiveProp, IsDisabledProp } from '../../../props'
import { getColor } from '../../../theme/getters'

type Props = IsDisabledProp & IsActiveProp

export const DayOption = styled(UnstyledButton)<Props>`
  color: ${getColor('contrast')};
  ${centerContent};
  ${borderRadius.s};

  ${({ isDisabled, isActive }) =>
    isDisabled
      ? css`
          cursor: initial;
          color: ${getColor('textShy')};
        `
      : isActive
        ? css`
            ${interactive};
            background: ${getColor('primary')};
          `
        : css`
            &:hover {
              ${interactive};

              background: ${getColor('mist')};
            }
          `}
`
