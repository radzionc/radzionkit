export const queryUrl = async <T>(url: string): Promise<T> => {
  console.log(`Querying ${url}`)
  const response = await fetch(url)

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error)
  }

  return response.json()
}
