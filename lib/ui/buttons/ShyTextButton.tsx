import styled, { css } from 'styled-components'

import { interactive } from '../css/interactive'
import { text } from '../text'
import { getColor } from '../theme/getters'

import { UnstyledButton } from './UnstyledButton'

export const shyTextButton = css`
  position: relative;
  ${interactive};
  color: ${getColor('textSupporting')};

  &:hover {
    color: ${getColor('contrast')};
  }

  position: relative;
  ${text({
    nowrap: true,
  })}

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    border-bottom: 1px dashed ${getColor('textSupporting')};
  }

  &:hover::after {
    border-bottom-color: ${getColor('contrast')};
  }
`

export const ShyTextButton = styled(UnstyledButton)`
  ${shyTextButton};
`
