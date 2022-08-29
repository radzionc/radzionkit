import type { AppProps } from "next/app";
import { useState } from "react";
import { GlobalStyle } from "ui/GlobalStyle";
import { Navigation } from "ui/Navigation";
import { ThemeProvider } from "ui/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
