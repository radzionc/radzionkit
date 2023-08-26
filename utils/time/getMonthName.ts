export const getMonthName = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'long' })
}
