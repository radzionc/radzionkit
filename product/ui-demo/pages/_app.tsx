import { PageVisitTracker } from '@lib/next-analytics-ui/PageVisitTracker'
import { Page } from '@lib/next-ui/Page'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { DarkLightThemeProvider } from '@lib/ui/theme/DarkLightThemeProvider'
import { ThemePreference } from '@lib/ui/theme/ThemePreference'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import { ReactNode, useState } from 'react'

import { AnalyticsProvider } from '../analytics/AnalyticsProvider'
import {
  usePersistentState,
  PersistentStateKey,
} from '../state/persistentState'

import type { AppProps } from 'next/app'

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
        <DarkLightThemeProvider value={theme} onChange={setTheme}>
          <GlobalStyle fontFamily={inter.style.fontFamily} />
          {component}
        </DarkLightThemeProvider>
      </QueryClientProvider>
    </AnalyticsProvider>
  )
}

export default MyApp
