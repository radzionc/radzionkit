import styled, { DefaultTheme, css } from 'styled-components'
import { croppedTextCSS } from '../utils/coppedTextCSS'

const getTextColorRecord = ({ colors }: DefaultTheme) =>
  ({
    regular: colors.text,
    supporting: colors.textSupporting,
    shy: colors.textShy,

    primary: colors.primary,
    alert: colors.alert,
    success: colors.success,
    reversed: colors.background,
    contrast: colors.contrast,
  }) as const

type TextWeight = 'regular' | 'semibold' | 'bold' | 'extraBold'
const fontWeight: Record<TextWeight, number> = {
  regular: 400,
  semibold: 500,
  bold: 600,
  extraBold: 800,
}

type TextHeight = 'small' | 'regular' | 'large'
const lineHeight: Record<TextHeight, number> = {
  small: 1,
  regular: 1.2,
  large: 1.5,
}

export type TextColor = keyof ReturnType<typeof getTextColorRecord>

export interface TextProps {
  color?: TextColor
  weight?: TextWeight
  size?: number
  height?: TextHeight
  centered?: boolean
  cropped?: boolean
  nowrap?: boolean
}

export const oneRemInPx = 16

const getFontSize = (sizeInPx: number) => {
  const sizeInRem = sizeInPx / oneRemInPx

  return `${sizeInRem}rem`
}

export const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;

  ${({ color, theme }) =>
    color &&
    css`
      color: ${getTextColorRecord(theme)[color].toCssValue()};
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${fontWeight[weight]};
    `}
  ${({ height }) =>
    height &&
    css`
      line-height: ${lineHeight[height]};
    `}
  ${({ size }) =>
    size &&
    css`
      font-size: ${getFontSize(size)};
    `}
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
    `}

  ${({ cropped }) => cropped && croppedTextCSS}
`
