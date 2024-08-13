export function extractRootDomain(url: string): string {
  // Create a new URL object
  const parsedUrl = new URL(url)

  // Get the hostname from the URL
  const hostname = parsedUrl.hostname

  // Split the hostname into its constituent parts
  const parts = hostname.split('.')

  // Check if the hostname has at least two parts (domain and TLD)
  if (parts.length < 2) {
    throw new Error('Invalid URL: hostname does not have enough parts')
  }

  // If there are more than two parts, return the second last part as the root domain
  return parts.length > 2 ? parts[parts.length - 2] : parts[0]
}
