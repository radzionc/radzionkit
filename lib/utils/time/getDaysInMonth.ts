type Input = {
  year: number
  monthIndex: number
}

export const getDaysInMonth = ({ year, monthIndex }: Input): number => {
  return new Date(year, monthIndex + 1, 0).getDate()
}
