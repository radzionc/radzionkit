import styled, { css } from 'styled-components'
import { getColor } from '../theme/getters'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { toSizeUnit } from '../css/toSizeUnit'
import { borderRadius } from '../css/borderRadius'

export type ModalPlacement = 'top' | 'center'

interface ModalContainerProps {
  width?: number
  placement: ModalPlacement
}

export const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  background: ${getColor('background')};

  ${({ width, placement }) =>
    width
      ? css`
          width: ${toSizeUnit(width)};
          ${borderRadius.m};
          max-height: 92%;
          ${placement === 'top' &&
          css`
            align-self: start;
            margin-top: 4%;
          `}
        `
      : takeWholeSpace};

  > * {
    padding: 24px;
  }
`
