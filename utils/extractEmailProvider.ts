export const extractEmailProvider = (email: string): string | undefined => {
  const regex = /(?<=@)\w+/

  const match = email.match(regex)
  return match ? match[0] : undefined
}
