import type { AppProps } from 'next/app'
import { ReactNode, useState } from 'react'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import { ThemePreference } from '@lib/ui/theme/ThemePreference'
import { ThemeProvider } from '@lib/ui/theme/ThemeProvider'
import { Page } from '@lib/next-ui/Page'
import {
  usePersistentState,
  PersistentStateKey,
} from '../state/persistentState'
import { AnalyticsProvider } from '../analytics/AnalyticsProvider'
import { PageVisitTracker } from '@lib/next-ui/PageVisitTracker'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

interface MyAppProps extends AppProps {
  Component: Page
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  const component = getLayout(<Component {...pageProps} />)

  const [theme, setTheme] = usePersistentState<ThemePreference>(
    PersistentStateKey.ThemePreference,
    'system',
  )

  return (
    <AnalyticsProvider>
      <PageVisitTracker />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={theme} onChange={setTheme}>
          <GlobalStyle fontFamily={inter.style.fontFamily} />
          {component}
        </ThemeProvider>
      </QueryClientProvider>
    </AnalyticsProvider>
  )
}

export default MyApp
