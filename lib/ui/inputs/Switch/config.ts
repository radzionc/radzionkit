export type SwitchSize = 'm' | 's'

const height: Record<SwitchSize, number> = { m: 24, s: 20 }

export const switchConfig = {
  spacing: 2,
  height: height,
}

export const getControlSize = (size: SwitchSize) =>
  switchConfig.height[size] - switchConfig.spacing * 2

export const getSwitchWidth = (size: SwitchSize) =>
  switchConfig.height[size] * 1.58
