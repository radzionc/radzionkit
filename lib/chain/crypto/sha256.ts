import { createHash } from 'crypto'

export const sha256 = (data: Buffer | string): Buffer =>
  createHash('sha256').update(data).digest()
