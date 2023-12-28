import type { AppProps } from 'next/app'
import { ReactNode, useEffect, useState } from 'react'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { ThemePreference } from '@lib/ui/theme/ThemePreference'
import { ThemeProvider } from '@lib/ui/theme/ThemeProvider'
import { analytics } from '../analytics'
import { Page } from '../layout/Page'
import {
  usePersistentState,
  PersistentStateKey,
} from '../state/persistentState'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

interface MyAppProps extends AppProps {
  Component: Page
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient())

  const router = useRouter()

  const { pathname } = router
  useEffect(() => {
    analytics.trackEvent('Visit page', { pathname })
  }, [pathname])

  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  const component = getLayout(<Component {...pageProps} />)

  const [theme, setTheme] = usePersistentState<ThemePreference>(
    PersistentStateKey.ThemePreference,
    'system',
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={theme} onChange={setTheme}>
        <GlobalStyle fontFamily={inter.style.fontFamily} />
        {component}
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
