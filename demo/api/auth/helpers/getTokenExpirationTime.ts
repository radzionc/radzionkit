export const getTokenExpirationTime = (durationInSeconds: number) =>
  Math.floor(Date.now() / 1000) + durationInSeconds
