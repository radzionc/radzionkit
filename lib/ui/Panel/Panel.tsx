import styled, { css } from "styled-components"

import { defaultBorderRadiusCSS } from "../borderRadius"
import { getCSSUnit } from "../utils/getCSSUnit"

type PanelKind = "regular" | "secondary"

export interface PanelProps {
  width?: React.CSSProperties["width"]
  padding?: React.CSSProperties["padding"]
  direction?: React.CSSProperties["flexDirection"]

  kind?: PanelKind

  withSections?: boolean
}

export const panelBackgroundCSS = css`
  background: ${({ theme: { name, colors } }) =>
    (name === "light" ? colors.background : colors.mist).toCssValue()};
`

export const secondaryPanelBackgroundCSS = css`
  background: ${({ theme: { colors } }) => colors.background.toCssValue()};
`

const panelPaddingCSS = css<{ padding?: React.CSSProperties["padding"] }>`
  padding: ${({ padding }) => getCSSUnit(padding || 20)};
`

export const Panel = styled.div<PanelProps>`
  ${defaultBorderRadiusCSS};
  width: ${({ width }) => (width ? getCSSUnit(width) : undefined)};
  overflow: hidden;

  ${({ withSections, direction = "column", kind }) =>
    withSections
      ? css`
          display: flex;
          flex-direction: ${direction};
          gap: 1px;

          background: ${({ theme }) =>
            theme.name === "light"
              ? theme.colors.mistExtra.toCssValue()
              : undefined};

          > * {
            ${panelPaddingCSS}

            ${kind === "secondary"
              ? secondaryPanelBackgroundCSS
              : panelBackgroundCSS}
          }
        `
      : css`
          ${panelPaddingCSS}
          ${kind === "secondary"
            ? secondaryPanelBackgroundCSS
            : panelBackgroundCSS}
        `}

  ${({ kind }) =>
    kind === "secondary"
      ? css`
          border: 2px solid ${({ theme }) => theme.colors.mist.toCssValue()};
        `
      : css`
          box-shadow: ${({ theme }) => theme.shadows.small};
        `}
`
