import { degreesInCircle } from '@reactkit/utils/degreesToRadians'
import { enforceRange } from '@reactkit/utils/enforceRange'

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
}
