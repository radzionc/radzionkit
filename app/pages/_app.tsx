import type { AppProps } from 'next/app'
import { useState } from 'react'
import { GlobalStyle } from '@reactkit/ui/ui/GlobalStyle'
import { ThemeProvider } from 'ui/ThemeProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Navigation } from 'navigation'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle fontFamily={inter.style.fontFamily} />
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
