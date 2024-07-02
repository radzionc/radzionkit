import { degreesInCircle } from '@lib/utils/degreesToRadians'
import { enforceRange } from '@lib/utils/enforceRange'

export const hslaKeys = ['h', 's', 'l', 'a'] as const

export type HSLAParameter = (typeof hslaKeys)[number]

export type ColorModifiers = Partial<
  Record<HSLAParameter, (parameter: number) => number>
>

export const hslaParamMaxValue: Record<HSLAParameter, number> = {
  h: degreesInCircle,
  s: 100,
  l: 100,
  a: 1,
}

export class HSLA {
  private _h = 0
  get h(): number {
    return this._h
  }
  set h(newH: number) {
    this._h = enforceRange(newH, 0, hslaParamMaxValue.h)
  }

  private _l = 0
  get l(): number {
    return this._l
  }
  set l(newL: number) {
    this._l = enforceRange(newL, 0, hslaParamMaxValue.l)
  }

  private _s = 0
  get s(): number {
    return this._s
  }
  set s(newS: number) {
    this._s = enforceRange(newS, 0, hslaParamMaxValue.s)
  }

  private _a = 0
  get a(): number {
    return this._a
  }
  set a(newA: number) {
    this._a = enforceRange(newA, 0, hslaParamMaxValue.a)
  }

  constructor(h: number, s: number, l: number, a = 1) {
    this.h = h
    this.s = s
    this.l = l
    this.a = a
  }

  toCssValue() {
    return `hsla(${this.h},${this.s}%,${this.l}%,${this.a})`
  }

  getVariant(modifiers: ColorModifiers) {
    const [h, s, l, a] = hslaKeys.map((key) => {
      const value = this[key]
      const modifier = modifiers[key]

      return modifier ? modifier(value) : value
    })

    return new HSLA(h, s, l, a)
  }

  static fromCssValue(hslaString: string): HSLA {
    const hslaRegex =
      /hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+(\.\d+)?)\s*\)/
    const match = hslaString.match(hslaRegex)

    if (!match) {
      throw new Error('Invalid HSLA string')
    }

    const [h, s, l, a] = match.slice(1, 5).map(Number)
    return new HSLA(h, s, l, a)
  }

  private relativeLuminance(r: number, g: number, b: number): number {
    const srgb = [r, g, b].map((v) => {
      const value = v / 255
      return value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
  }

  private toRgba(): [number, number, number, number] {
    const { h, s, l, a } = this
    const C = (1 - Math.abs((2 * l) / 100 - 1)) * (s / 100)
    const X = C * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = l / 100 - C / 2

    let r = 0
    let g = 0
    let b = 0

    if (0 <= h && h < 60) {
      r = C
      g = X
      b = 0
    } else if (60 <= h && h < 120) {
      r = X
      g = C
      b = 0
    } else if (120 <= h && h < 180) {
      r = 0
      g = C
      b = X
    } else if (180 <= h && h < 240) {
      r = 0
      g = X
      b = C
    } else if (240 <= h && h < 300) {
      r = X
      g = 0
      b = C
    } else if (300 <= h && h < 360) {
      r = C
      g = 0
      b = X
    }

    return [(r + m) * 255, (g + m) * 255, (b + m) * 255, a]
  }

  private contrastRatio(l1: number, l2: number): number {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  }

  private getLuminance(): number {
    const [r, g, b] = this.toRgba()
    return this.relativeLuminance(r, g, b)
  }

  getHighestContrast(...options: HSLA[]): HSLA {
    const bgLuminance = this.getLuminance()
    let maxContrast = 0
    let bestOption = options[0]

    options.forEach((option) => {
      const elementLuminance = option.getLuminance()
      const contrast = this.contrastRatio(bgLuminance, elementLuminance)

      if (contrast > maxContrast) {
        maxContrast = contrast
        bestOption = option
      }
    })

    return bestOption
  }
}
