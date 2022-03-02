import GlobalStyle from '@uikit/globalStyles';
import './styles.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps ) {
  return <>
    <GlobalStyle />
    <Component { ...pageProps } />
  </>
}

export default MyApp
