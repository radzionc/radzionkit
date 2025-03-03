import styled, { DefaultTheme, css } from 'styled-components'

import { cropText } from '../css/cropText'
import { takeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { toSizeUnit } from '../css/toSizeUnit'

const getTextColorRecord = ({ colors }: DefaultTheme) =>
  ({
    regular: colors.text,
    supporting: colors.textSupporting,
    shy: colors.textShy,

    primary: colors.textPrimary,
    idle: colors.idle,
    alert: colors.alert,
    success: colors.success,
    reversed: colors.background,
    contrast: colors.contrast,
  }) as const

type TextHeight = 's' | 'm' | 'l' | 'xl'
const lineHeight: Record<TextHeight, number> = {
  s: 1,
  m: 1.2,
  l: 1.5,
  xl: 1.75,
}

export type TextColor = keyof ReturnType<typeof getTextColorRecord>

export interface TextProps {
  color?: TextColor
  weight?: React.CSSProperties['fontWeight']
  size?: number
  height?: TextHeight
  centerHorizontally?: boolean
  centerVertically?:
    | boolean
    | {
        gap: number
      }
  cropped?: boolean
  nowrap?: boolean
  blurBackground?: boolean
}

export const text = ({
  color,
  weight,
  size,
  height,
  centerHorizontally,
  centerVertically,
  cropped,
  nowrap,
  blurBackground,
}: TextProps) => css`
  overflow-wrap: break-word;

  ${({ theme }) =>
    color &&
    css`
      color: ${getTextColorRecord(theme)[color].toCssValue()};
    `}
  ${weight &&
  css`
    font-weight: ${weight};
  `}
  ${height &&
  css`
    line-height: ${lineHeight[height]};
  `}
  ${size &&
  css`
    font-size: ${toSizeUnit(size)};
  `}
  ${centerHorizontally &&
  css`
    text-align: center;
  `}
  ${nowrap &&
  css`
    white-space: nowrap;
  `}
  ${cropped && cropText}

  ${centerVertically &&
  css`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;

    ${typeof centerVertically === 'object' &&
    css`
      gap: ${toSizeUnit(centerVertically.gap)};
    `}
  `}
  ${blurBackground &&
  css`
    position: relative;

    &:before {
      content: '';
      z-index: -1;
      ${takeWholeSpaceAbsolutely};
      pointer-events: none;
      backdrop-filter: blur(100px);
    }
  `}
`

export const Text = styled.p<TextProps>`
  ${text}
`
