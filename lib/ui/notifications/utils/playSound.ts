export const playSound = (url: string) => {
  const audio = new Audio(url)
  return audio.play()
}
