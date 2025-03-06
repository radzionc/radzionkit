export const getRandomHex = (byteLength = 32): `0x${string}` => {
  const randomBytes = new Uint8Array(byteLength)
  crypto.getRandomValues(randomBytes)
  const hexString = Array.from(randomBytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')

  return `0x${hexString}` as `0x${string}`
}
