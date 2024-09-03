import styled, { css } from 'styled-components'

import { toSizeUnit } from '../css/toSizeUnit'
import { getColor } from '../theme/getters'
import { match } from '@lib/utils/match'
import { borderRadius } from '../css/borderRadius'

type PanelKind = 'regular' | 'secondary'

export interface PanelProps {
  padding?: React.CSSProperties['padding']
  direction?: React.CSSProperties['flexDirection']

  kind?: PanelKind

  withSections?: boolean
}

export const panelDefaultPadding = 20

export const panel = ({
  padding = panelDefaultPadding,
  direction = 'column',
  kind = 'regular',
  withSections = false,
}: PanelProps) => {
  return css`
    ${borderRadius.m};

    overflow: hidden;

    ${({ theme }) => {
      const contentBackground = match(kind, {
        secondary: () => theme.colors.background.toCssValue(),
        regular: () => theme.colors.mist.toCssValue(),
      })

      const content = css`
        padding: ${toSizeUnit(padding)};
        background: ${contentBackground};
      `

      if (!withSections) {
        return content
      }

      return css`
        display: flex;
        flex-direction: ${direction};

        ${kind === 'secondary'
          ? css`
              background: ${getColor('mist')};
              gap: 2px;
            `
          : css`
              gap: 1px;
            `}

        > * {
          ${content}
        }
      `
    }}

    ${kind === 'secondary' &&
    css`
      border: 2px solid ${getColor('mist')};
    `}
  `
}

export const Panel = styled.div<PanelProps>`
  ${panel}
`
