import { getHoverVariant } from '@lib/ui/theme/getHoverVariant'
import { match } from '@lib/utils/match'
import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { MergeRefs } from '../base/MergeRefs'
import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { interactive } from '../css/interactive'
import { sameDimensions } from '../css/sameDimensions'
import { toSizeUnit } from '../css/toSizeUnit'
import { AsProp } from '../props'
import { getColor } from '../theme/getters'
import { Tooltip } from '../tooltips/Tooltip'

import { UnstyledButton } from './UnstyledButton'

export const iconButtonSizes = ['s', 'm', 'l'] as const
export type IconButtonSize = (typeof iconButtonSizes)[number]

export const iconButtonKinds = [
  'regular',
  'secondary',
  'alert',
  'alertSecondary',
] as const
export type IconButtonKind = (typeof iconButtonKinds)[number]

export const iconButtonSizeRecord: Record<IconButtonSize, number> = {
  s: 24,
  m: 32,
  l: 40,
}

export const iconButtonIconSizeRecord: Record<IconButtonSize, number> = {
  s: 14,
  m: 14,
  l: 16,
}

type IconButtonContainerParams = {
  size?: IconButtonSize
  kind?: IconButtonKind
  isDisabled?: boolean
}

export const iconButtonContainer = ({
  size = 'm',
  kind = 'regular',
  isDisabled = false,
}: IconButtonContainerParams) => css`
  ${interactive};
  position: relative;
  ${centerContent};
  ${sameDimensions(iconButtonSizeRecord[size])};

  color: ${({ theme: { colors } }) =>
    match(kind, {
      regular: () => colors.text,
      secondary: () => colors.text,
      alert: () => colors.alert,
      alertSecondary: () => colors.alert,
    }).toCssValue()};

  font-size: ${toSizeUnit(iconButtonIconSizeRecord[size])};

  ${borderRadius.s};

  ${kind !== 'secondary' &&
  kind !== 'alertSecondary' &&
  css`
    border: 1px solid ${getColor('mist')};
  `}

  background: ${({ theme: { colors } }) =>
    match(kind, {
      regular: () => colors.foreground,
      secondary: () => colors.transparent,
      alert: () => colors.alert.getVariant({ a: (a) => a * 0.12 }),
      alertSecondary: () => colors.transparent,
    }).toCssValue()};

  ${({ theme }) =>
    !isDisabled &&
    css`
      &:hover {
        background: ${match(kind, {
          regular: () => getHoverVariant('foreground')({ theme }),
          secondary: () => theme.colors.mist.toCssValue(),
          alert: () =>
            theme.colors.alert.getVariant({ a: (a) => a * 0.24 }).toCssValue(),
          alertSecondary: () =>
            theme.colors.alert.getVariant({ a: (a) => a * 0.12 }).toCssValue(),
        })};

        color: ${match(kind, {
          regular: () => getColor('contrast'),
          secondary: () => getColor('contrast'),
          alert: () => getColor('alert'),
          alertSecondary: () => getColor('alert'),
        })};
      }
    `}

  cursor: ${isDisabled ? 'initial' : 'pointer'};
  opacity: ${isDisabled ? 0.8 : 1};
`

const Container = styled(UnstyledButton)<IconButtonContainerParams>`
  ${iconButtonContainer};
`

export type IconButtonProps = Omit<
  ComponentProps<typeof Container>,
  'isDisabled'
> & {
  icon: React.ReactNode
  size?: IconButtonSize
  kind?: IconButtonKind
  title: string
  isDisabled?: boolean | string
} & AsProp

export function IconButton({
  icon,
  isDisabled = false,
  onClick,
  ...rest
}: IconButtonProps) {
  const containerProps = {
    isDisabled: !!isDisabled,
    onClick: isDisabled ? undefined : onClick,
    ...rest,
  }

  const buttonContent = <Container {...containerProps}>{icon}</Container>

  if (typeof isDisabled === 'string') {
    return (
      <Tooltip
        content={isDisabled}
        renderOpener={({ ref: tooltipRef, ...tooltipRest }) => (
          <MergeRefs
            refs={[rest.ref, tooltipRef]}
            render={(mergedRef) => (
              <Container ref={mergedRef} {...containerProps} {...tooltipRest}>
                {icon}
              </Container>
            )}
          />
        )}
      />
    )
  }

  return buttonContent
}
