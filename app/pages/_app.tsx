import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { GlobalStyle } from '@reactkit/ui/ui/GlobalStyle'
import { ThemeProvider } from 'ui/ThemeProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Inter } from 'next/font/google'
import { analytics } from 'analytics'
import { useRouter } from 'next/router'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  const router = useRouter()

  const { pathname } = router
  useEffect(() => {
    analytics.trackEvent('Visit page', { pathname })
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle fontFamily={inter.style.fontFamily} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
