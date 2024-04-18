export const workdaysNumber = 5
export const weekendsNumber = 2

export const isWorkday = (timestamp: number) => {
  const date = new Date(timestamp)
  const day = date.getDay()
  return day !== 0 && day !== 6
}
