import { sha256 } from '../crypto/sha256'

/**
 * Performs Bitcoin's standard double SHA256 hashing and returns the result in reversed hex format
 */
export const bitcoinHash = (data: Buffer): string =>
  sha256(sha256(data)).reverse().toString('hex')
