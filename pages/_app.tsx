import GlobalStyle from '@uikit/globalStyles';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps ) {
  return <>
    <GlobalStyle />
    <Component { ...pageProps } />
  </>
}

export default MyApp
