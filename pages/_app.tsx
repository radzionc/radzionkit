import type { AppProps } from "next/app";
import { GlobalStyle } from "ui/GlobalStyle";
import { Navigation } from "ui/Navigation";
import { ThemeProvider } from "ui/theme/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </ThemeProvider>
  );
}

export default MyApp;
