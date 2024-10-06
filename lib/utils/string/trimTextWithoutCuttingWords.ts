export function trimTextWithoutCuttingWords(
  text: string,
  maxLength: number,
): string {
  if (text.length <= maxLength) {
    return text
  }

  let truncated = text.slice(0, maxLength + 1)

  const lastSpaceIndex = truncated.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    truncated = truncated.slice(0, lastSpaceIndex)
  } else {
    truncated = text.slice(0, maxLength)
  }

  truncated = truncated = truncated.replace(/[^a-zA-Z0-9]+$/, '')

  return truncated
}
