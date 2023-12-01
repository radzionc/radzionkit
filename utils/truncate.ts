export const truncate = (text: string, start: number, end: number) => {
  const head = text.slice(0, start)
  const tail = text.slice(-1 * end, text.length)
  return text.length > start + end ? [head, tail].join('...') : text
}
